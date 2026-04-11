const fs = require('fs');
let content = fs.readFileSync('project.md', 'utf-8');

function replaceTypes(text) {
  text = text.replace(/str \| None/g, 'string | null');
  text = text.replace(/: str(  #|$)/gm, ': string$1');
  text = text.replace(/: bool/g, ': boolean');
  text = text.replace(/: datetime \| None/g, ': Date | null');
  text = text.replace(/: datetime(  #|$)/gm, ': Date$1');
  text = text.replace(/: int(  #|$)/gm, ': number$1');
  text = text.replace(/: float(  #|$)/gm, ': number$1');
  text = text.replace(/List\[(.*?)\]/g, 'Array<$1>');
  text = text.replace(/Any/g, 'any');
  text = text.replace(/: JSON/g, ': Record<string, any>');
  text = text.replace(/: UUID/g, ': string // uuid');
  text = text.replace(/Enum\[(.*?)\]/g, (match, p1) => {
    return p1.split(', ').map(s => `'${s.trim().replace(/\n/g, '')}'`).join(' | ');
  });
  text = text.replace(/timestamptz/g, 'Date');
  return text;
}

// We only want to replace types in the Core Data Models section
const startPattern = '## Core Data Models';
const endPattern = 'Key API Contracts';
const startIndex = content.indexOf(startPattern);
const endIndex = content.indexOf(endPattern);

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.slice(0, startIndex);
  const section = content.slice(startIndex, endIndex);
  const after = content.slice(endIndex);
  
  const modifiedSection = replaceTypes(section);
  fs.writeFileSync('project.md', before + modifiedSection + after);
  console.log('Schemas updated successfully');
} else {
  console.log('Section not found');
}
