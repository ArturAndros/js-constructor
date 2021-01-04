import image from './assets/baby-yoda.png'
import {} from './classes/blocks'
import {TextBlock,TitleBlock, ImageBlock,TextColumnsBlock} from "./classes/blocks";
import {css} from "./utils";

export const model = [
    new TitleBlock( 'Really interesting heading' , {
        tag:'h3',
        styles:css({
            background: '#8B2635',
            color:'#FBF9FF',
            'text-align': 'center'
        })
        // styles:'background: #8B2635;color:#FBF9FF;text-align:center;'
    }),
    new ImageBlock(image,{
        styles:'padding: 2rem 1rem',
        alt:'cute image',
        imageStyles:'width:100%'
    }),
    new TextColumnsBlock([
        'Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'
    ],{
        styles:'padding:1rem; '
    }),
    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, debitis',
    {
        styles:'background: #0f0f0f ;color:#FBF9FF;padding:2rem;'
    })

]