function findDuplicates(data) {
    let duplicates = {};
    data.forEach(item => {
        let fileName = item.replace(',', ''); // 쉼표 제거
        if (!duplicates[fileName]) {
            duplicates[fileName] = 1;
        } else {
            duplicates[fileName]++;
        }
    });

    // 중복된 항목만 모으기
    let duplicatedItems = {};
    for (let fileName in duplicates) {
        if (duplicates[fileName] > 1) {
            duplicatedItems[fileName] = duplicates[fileName];
        }
    }

    return duplicatedItems;
}

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

    // 중복된 파일 이름 찾기
    let duplicatedFiles = {};
    for (let extension in classifiedFiles) {
        duplicatedFiles[extension] = findDuplicates(classifiedFiles[extension]);
    }

    // 중복된 파일 이름만 추출하여 결과 객체 생성
    let result = {};
    for (let extension in duplicatedFiles) {
        let duplicatedFileNames = Object.keys(duplicatedFiles[extension]);
        if (duplicatedFileNames.length > 0) {
            result[extension] = duplicatedFileNames;
        }
    }

    return result;
}

let fileNamesString = `Frutiger Normal.ttf
Frutiger Normal.ttf
frutiger.ttf
frutiger.ttf
Frutiger45-Light.ttf
Frutiger45-Light.ttf
Frutiger45-Light.ttf
Frutiger46-Light-Italic-LightItalic.ttf
Frutiger47-CondensedLight.ttf
Frutiger47-CondensedLight.ttf
Frutiger55Roman.ttf
Frutiger55Roman.ttf
Frutiger56-Italic-RomanItalic.ttf
Frutiger57-Condensed-Roman.ttf
Frutiger65-Bold.ttf
Frutiger66-Bold-Italic-BoldItalic.ttf
Frutiger67-Condensed-Bold.ttf
Frutiger75-Black.ttf
Frutiger76-Black-Italic-BlackItalic.ttf
Frutiger77-CondensedBlack.ttf
Frutiger87-CondensedExtraBlack-Extra-Black.ttf
Frutiger95-UltraBlack-Ultra-Black.ttf
FrutigerExt Bol.ttf
FrutigerExt Bol.ttf
FrutigerExt Nor.ttf
FrutigerExt Nor.ttf
FrutigerExtOb 2.ttf
FrutigerExtOb 2.ttf
FrutigerExtObl .ttf
FrutigerExtObl .ttf
FrutigerExtObl Bold.ttf
FrutigerExtObl Bold.ttf
FrutigerExtObl Normal.ttf
FrutigerExtObl Normal.ttf
FrutigerLTStd-Black.otf
`;
// 
let formattedFiles = classifyAndFormatFileNames(fileNamesString);
console.log(formattedFiles);
