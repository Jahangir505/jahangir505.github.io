
import React from 'react';
import {Container} from "@mui/material";
import ImageBox from "./ImageBox";
import Grid from '@mui/material/Grid';
import { css } from '@emotion/css'
import cardBg from "../../../static/images/card.jpeg";
import bg1 from "../../../static/images/image.jpeg";
import bg2 from "../../../static/images/back2.jpeg";
import bg3 from "../../../static/images/back3.jpeg";
import bg4 from "../../../static/images/back4.jpeg";
import bg5 from "../../../static/images/back5.jpeg";
import TabBox from './TabBox';


const __css_post_card_section = css`

    .css-mhc70k-MuiGrid-root>.MuiGrid-item {
        padding: 0; 
    }
    
    margin-top: 50px;
    
    .single-box{
        background: #ffffff;
        border: 1px solid #eee;
        margin-bottom: 10px;
        .__css_img_box_section{
        width: 100%;
          img{ width: 100%; position: relative}
          span{ width: 100%; position: absolute; left: 0}
        }
        
        .css-mhc70k-MuiGrid-root{
            margin-top:0;
          
        }
    }
`;


const PostCard = () => {
    return(
        <React.Fragment>
            <div className={__css_post_card_section} >
                <Container maxWidth="md">
                   <div className={"single-box"}>
                       <Grid container spacing={2}>
                           <Grid item xs={6} >
                               <ImageBox src={cardBg}/>
                           </Grid>
                           <Grid item xs={6}>
                               <TabBox name={"Jahangir"} username={"jahangir505"}/>
                           </Grid>
                       </Grid>
                   </div>

                    <div className={"single-box"}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} >
                                <ImageBox src={bg1}/>
                            </Grid>
                            <Grid item xs={6}>
                                <TabBox name={"Siam Ahmed"} username={"siam32"}/>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={"single-box"}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} >
                                <ImageBox src={bg2}/>
                            </Grid>
                            <Grid item xs={6}>
                                <TabBox name={"Nayeem"} username={"nayeem550"}/>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={"single-box"}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} >
                                <ImageBox src={bg3}/>
                            </Grid>
                            <Grid item xs={6}>
                                <TabBox name={"Sabuj"} username={"sabuj23"}/>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={"single-box"}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} >
                                <ImageBox src={bg4}/>
                            </Grid>
                            <Grid item xs={6}>
                                <TabBox name={"Shakib"} username={"shakib75"}/>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={"single-box"}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} >
                                <ImageBox src={bg5}/>
                            </Grid>
                            <Grid item xs={6}>
                                <TabBox name={"Nur Muhammad"} username={"nur90"}/>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default PostCard