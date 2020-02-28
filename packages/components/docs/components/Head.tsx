import React, { FC } from 'react';
import NextHead from 'next/head';

const Head: FC = () => {
    return (
        <NextHead>
            <title>Blocks | A design system by Wout Sluiter</title>
            <link
                href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i"
                rel="stylesheet"
            />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html: `
                        * {
                            box-sizing: border-box;
                        }
                        body, p {
                            margin: 0;
                            padding: 0;
                        }
                    `,
                }}
            />
            <link
                href="https://fonts.googleapis.com/css?family=Anaheim|Questrial|Nunito|Noto+Sans|Playfair+Display|Montserrat:500,900|Roboto:400,500,700|Amatic+SC|ZCOOL+KuaiLe|Roboto+Slab|Lobster|EB+Garamond"
                rel="stylesheet"
            />
        </NextHead>
    );
};

export default Head;
