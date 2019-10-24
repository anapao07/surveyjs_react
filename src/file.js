

// var survey = new Survey.Model(json);
// Survey
//     .StylesManager
//     .applyTheme("default");

// var json = {
//     questions: [
//         {
//             type: "picture",
//             title: "Foto de Daño",
//             name: "image",
//             storeDataAsText: false,
//             showPreview: true,
//             imageWidth: 150,
//             isRequired: true,
//             maxPictures: 4,
//             minPictures: 1,
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
//         // You can use fetch for modern browsers
//         //fetch("/api/MySurveys/files?name=" + options.content)
//         //  .then(function(response) {
//         //    return response.blob();
//         //  })
//         //  .then(function(blob) {
//         //    var reader = new FileReader();
//         //    reader.onload = function(e) {
//         //        options.callback("success", e.target.result);
//         //    };
//         //    reader.readAsDataURL(new File([blob], options.fileValue.name, { type: options.fileValue.type }));
//         //    options.callback("success", URL.createObjectURL(blob));
//         //  });
//     });

// // You can store file download url as a content property of a file question value
// // In this case you can handle the `onUploadFiles` event only
// // This example uses jQuery aiax function
// /*
// survey.onUploadFiles.add((survey, options) => {
//     var formData = new FormData();
//     options.files.forEach(function(file) {
//         formData.append(file.name, file);
//     });
//     $.ajax({
//         url: "/api/MySurveys/uploadFiles?accessKey=<your_access_key>", // https://surveyjs.io/api/MySurveys/uploadFiles
//         type: "POST",
//         xhr: function () {
//             var myXhr = $.ajaxSettings.xhr();
//             if (myXhr.upload) {
//                 myXhr.upload.addEventListener('progress', function (event) {
//                     var percent = 0;
//                     var position = event.loaded || event.position;
//                     var total = event.total;
//                 }, false);
//             }
//             return myXhr;
//         },
//         success: function (data) {
//             options.callback("success",
//                 options.files.map(file => {
//                     return { file: file, content: "/api/MySurveys/files?name=" + data[file.name] };
//                 })
//             );
//         },
//         error: function (error) {
//         },
//         async: true,
//         data: formData,
//         cache: false,
//         contentType: false,
//         processData: false,
//         timeout: 60000
//     });
// });
// */

// $("#surveyElement").Survey({model: survey});
