import React from 'react'

function productimages({Product}) {
  return (
  
       <div className="imagesitem">
                  <div className="bigimage">
                    <img id="big_img" src={Product.images[0]} alt={Product.title} />
                  </div>
                  <div className="smalimage">
                    {Product.images.map((t, index) => {
                      return (
                        <img
                          src={t}
                          key={index}
                          alt={Product.title}
                          onClick={() => {
                            document.getElementById("big_img").src = t;
                          }}
                        ></img>
                      );
                    })}
                  </div>
                </div>
 
  )
}

export default productimages
