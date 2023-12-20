import React from "react";

const ImagesDisplay  = ({images}) => {

return(
    <div className="image-display">
        {
            images.map((image,index) => (
                <img key={index} src={image.urls.small} alt={image.alt_description} />
            ))

        }

    </div>
)
}
export default ImagesDisplay;