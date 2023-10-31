import React from 'react'

function Item({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (

        <li className="item" >

            {item.data.urlToImage &&
                <img className="thumbnail"
                    alt=""
                    src={item.data.image?.thumbnail?.contentUrl}
                />
            }

            <h2 className="title">
                <a href={item.data.url}>{item.data.title}</a>
            </h2>

            <p className="description">
                {item.data.description}
            </p>

            <div className="meta">
                <span>{formatDate(item.data.datePublished)}</span>

                <span className="provider">
                    {item.data.provider[0].image?.thumbnail &&
                        <img className="provider-thumbnail"
                            alt=""
                            src={item.data.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
                        />
                    }
                    {item.data.provider[0].name}
                </span>

                {item.data.category &&
                    <span>{separateWords(item.data.category)}</span>
                }
            </div>
        </li>
    )
}

export default Item