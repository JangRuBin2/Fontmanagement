function classifyAndFormatFileNames(fileNamesString) {
  let fileNames = fileNamesString.split('\n').filter(Boolean); // 줄바꿈 문자로 분리한 후 빈 문자열 제거
  let classifiedFiles = {};

  // 파일 이름을 확장자로 분류 -> 확
  fileNames.forEach(function(fileName) {
      let extension = fileName.split('.').pop().toUpperCase(); // 확장자 추출 후 대문자로 변환
      if (!classifiedFiles[extension]) {
          classifiedFiles[extension] = [];
      }
      classifiedFiles[extension].push(fileName);
  });

  // 각 확장자 뒤에 쉼표 추가
  for (let extension in classifiedFiles) {
      classifiedFiles[extension] = classifiedFiles[extension].map(function(fileName) {
          return `${fileName},`; // 백틱을 사용하여 문자열 내에 쉼표를 추가
      });
  }

  return classifiedFiles;
}

let fileNamesString = `
DSVAsphaltStd-B.otf
DSVAsphaltStd-B.otf
DSVGuyStd-B.otf
DSVGuyStd-B.otf
DSVKissStd-B.otf
DSVKissStd-B.otf
DSVMassStd-EB.otf
DSVMassStd-EB.otf
DSVNovelStd-B.otf
DSVNovelStd-B.otf
DSVWrittingStd-B.otf
DSVWrittingStd-B.otf
`;

let formattedFiles = classifyAndFormatFileNames(fileNamesString);
console.log(formattedFiles);
