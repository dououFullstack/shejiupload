Meteor.call("getQiniuDomain", function (error, result) {
  if (result) {
    Session.set("qiniuUploadDomain", result);
  }
});
Template.imgUploader.onRendered(function () {
  Session.set("imageFileName", "未选择文件");
  Session.set("logoImage", "");
  Session.set("works1", "");
  Session.set("works2", "");
  Session.set("works3", "");
});

Template.imgUploader.events({
  'click #myFileInput': function () {
    // $('#myFileInput').trigger("click");

  },

  'change #myFileInput': function (e, template) {
    // 读取所有files
    $('.wel-body').append('<div>图片上传中...</div>');
    $('.wel-body div:last').attr('id','file-transfer');
    var files = event.target.files;
    if (files.length === 0) {
      // Session.set("imageFileName", "未选择文件");
      // Session.set("logoImage", "");
      // $("#imageReveal").css("display", "none");
      return;
    }
    // WARN: 选取file的第一个，以后需要循环所有图片
    var file = files[0];
    Session.set("imageFileName", file.name);
    // console.log(file);

    // 初始化FileReader来读取file
    var fileReader = new FileReader();
    // callback: FileReader.onloadend 文件读取完毕时调用
    fileReader.onloadend = function () {
      var dataString = fileReader.result;
      // WARN: 仅限一个图片时使用，后期需要修改

      var dataUrl = dataString;
      Meteor.call('sendAvatarInBase64', dataUrl, function (err, res) {
          // remove div
        $('#file-transfer').remove();
        if (res) {
          // document.querySelector('img').src = Session.get("qiniuUploadDomain") + res;
          var imgUrl = Session.get("qiniuUploadDomain") + res;

          // $("#imageReveal").attr("src", imgUrl);
          $("#imageReveal").css("display", "inline-block");
          Session.set("logoImage", imgUrl);
          // console.log(Session.get("qiniuUploadDomain") + res);
          alert('图片上传成功');
        } else {
          alert('图片上传失败，请重试');
        }
      });


    };
    // 转换成base64
    fileReader.readAsDataURL(file);
  },
});
Template.imgUploader.events({
  'change #works1': function(e, template) {
    // $('body').append('<div>图片上传中...</div>');
    // $('body div:last').attr('id','file-transfer');
    var files = event.target.files;
    if (files.length === 0) {
      return;
    }
    var file = files[0];
    Session.set("imageFileName", file.name);
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      var dataString = fileReader.result;
      var dataUrl = dataString;
      Meteor.call('sendAvatarInBase64', dataUrl, function(err, res) {
        if (res) {
          var imgUrl = Session.get("qiniuUploadDomain") + res + "?imageView2/2/w/500/h/500";
          Session.set("works1", imgUrl);
          alert('图片上传成功');
        } else {
          alert('图片上传失败，请重试');
        }
      });
    };
    fileReader.readAsDataURL(file);
  },
});
Template.imgUploader.events({
  'change #works2': function(e, template) {
    $('.wel-body').append('<div>图片上传中...</div>');
    $('.wel-body div:last').attr('id','file-transfer');
    var files = event.target.files;
    if (files.length === 0) {
      return;
    }
    var file = files[0];
    Session.set("imageFileName", file.name);
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      var dataString = fileReader.result;
      var dataUrl = dataString;
      Meteor.call('sendAvatarInBase64', dataUrl, function(err, res) {
        if (res) {
          var imgUrl = Session.get("qiniuUploadDomain") + res + "?imageView2/2/w/500/h/500";
          Session.set("works2", imgUrl);
          alert('图片上传成功');
        } else {
          alert('图片上传失败，请重试');
        }
      });
    };
    fileReader.readAsDataURL(file);
  },
});

Template.imgUploader.events({
  'change #works3': function(e, template) {
    $('.wel-body').append('<div>图片上传中...</div>');
    $('.wel-body div:last').attr('id','file-transfer');
    var files = event.target.files;
    if (files.length === 0) {
      return;
    }
    var file = files[0];
    Session.set("imageFileName", file.name);
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      var dataString = fileReader.result;
      var dataUrl = dataString;
      Meteor.call('sendAvatarInBase64', dataUrl, function(err, res) {
        if (res) {
          var imgUrl = Session.get("qiniuUploadDomain") + res + "?imageView2/2/w/500/h/500";
          Session.set("works3", imgUrl);
          alert('图片上传成功');
        } else {
          alert('图片上传失败，请重试');
        }
      });
    };
    fileReader.readAsDataURL(file);
  },
});
