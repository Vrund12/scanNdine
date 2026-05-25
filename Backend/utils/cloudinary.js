const cloudinary = require("cloudinary").v2
const fs = require('fs')

cloudinary.config()

const uploadOnCloudinary = async (localFilePath) => {
    try {
        
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {resource_type: 'image'})
        console.log("file uploaded on cloudinary: ", response.secure_url)
        return response.secure_url
    } catch (error) {
        // remove the file from local disk as the upload is failed 
        fs.unlinkSync(localFilePath)
        console.error("error: ", error)
    }
}

module.exports = {uploadOnCloudinary}