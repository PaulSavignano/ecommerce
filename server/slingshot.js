Slingshot.fileRestrictions("uploadToAmazonS3", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 2 * 1024 * 1024
})

Slingshot.createDirective("uploadToAmazonS3", Slingshot.S3Storage, {
  bucket: "savignano-ecommerce-images",
  region: "us-west-2",
  acl: "public-read",
  authorize: function() {
    return true
  },
  key: function(file) {
    var unique = Random.hexString(16)
    var user = Meteor.users.findOne(this.userId)
    return user.emails[0].address + "/previewImage" + "/" + unique + file.name
  }
})
