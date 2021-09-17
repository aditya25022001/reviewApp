import React from 'react'
import { Helmet } from 'react-helmet'

export const SEO = ({ title, description, image, altText, ogurl }) => {

    const altTextDefault = ""
    const titleDefault = ""
    const descriptionDefault = ""
    const imageDefault = ""
    const ogUrlDefault = ""

    return (
        <Helmet htmlAttributes={{ lang: "en" }}>
            <meta property="og:type" content="website" />
            <meta charSet="utf-8" />
            <meta name="keywords" content=""/>
            <meta name="author" content="Aditya Uday Ubale"/>
            <title>{title || titleDefault}</title>
            <meta name="description" content={description || descriptionDefault} />
            <meta name="image" content={image || imageDefault} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@adityaudayubale" />
            <meta name="twitter:title" content={title || titleDefault} />
            <meta name="twitter:description" content={description || descriptionDefault} />
            <meta name="twitter:image" content={image || imageDefault} />
            <meta name="twitter:image:alt" content={altText || altTextDefault} />
            <meta property="og:url" content={ogurl || ogUrlDefault} />
            <meta property="og:title" content={title || titleDefault} />
            <meta property="og:description" content={description || descriptionDefault} />
            <meta property="og:image" content={image || imageDefault} />
        </Helmet>
    )
}