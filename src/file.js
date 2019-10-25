
// var json = {
//     questions: [
//         {
//             type: "file",
//             title: "Please upload your photo",
//             name: "image",
//             storeDataAsText: false,
//             showPreview: true,
//             imageWidth: 150,
//             maxSize: 102400
//         }
//     ]
// };

// window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

// // You can store file id as a content property of a file question value
// // In this case you should handle both `onUploadFiles` and `onDownloadFile` events

// survey
//     .onUploadFiles
//     .add((survey, options) => {
//         var formData = new FormData();
//         options
//             .files
//             .forEach(function (file) {
//                 formData.append(file.name, file);
//             });
//         var xhr = new XMLHttpRequest();
//         xhr.responseType = "json";
//         xhr.open("POST", "/api/MySurveys/uploadFiles?accessKey=<your_access_key>"); // https://surveyjs.io/api/MySurveys/uploadFiles
//         xhr.onload = function () {
//             var data = xhr.response;
//             options.callback("success", options.files.map(file => {
//                 return {
//                     file: file,
//                     content: data[file.name]
//                 };
//             }));
//         };
//         xhr.send(formData);
//     });

// survey
//     .onDownloadFile
//     .add((survey, options) => {
//         var xhr = new XMLHttpRequest();
//         xhr.responseType = "blob";
//         xhr.open("GET", "/api/MySurveys/files?name=" + options.content); // "https://surveyjs.io/api/MySurveys/files?name=" + options.content
//         xhr.onload = function () {
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 options.callback("success", e.target.result);
//             };
//             reader.readAsDataURL(new File([xhr.response], options.fileValue.name, {type: options.fileValue.type}));
//         };
//         xhr.send();
       
//     });

// ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));