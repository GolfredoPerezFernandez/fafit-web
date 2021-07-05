

import {  Fonts, } from '../app/Styles';

const _styles = {  
  slider: RX.Styles.createViewStyle({
    overflow: 'hidden' // for custom animations
  }),
  sliderContentContainer: RX.Styles.createViewStyle({
    alignSelf:'center'
      }),
      titleStyle55: RX.Styles.createTextStyle({
        font:Fonts.displayBold,
        fontSize:18,
        textAlign:'center',
        color:'white',
        alignSelf:'center'
      }),
      titleStyle0: RX.Styles.createTextStyle({
        font:Fonts.displayBold,
        fontSize:16,
        textAlign:'center',
        color:'black',
        alignSelf:'center'
      }),
  titleStyle: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:24,
    textAlign:'center',
    color:'black',
    alignSelf:'center'
  }),
  titleStyle2s: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:32,
    textAlign:'left',
    color:'white',
    alignSelf:'flex-start'
  }),
  titleStyle2s2: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:32,
    textAlign:'left',
    color:'#FF296D',
    alignSelf:'flex-start'
  }),
  titleStyle2: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:40,
    textAlign:'center',
    color:'black',
    alignSelf:'center'
  }),
  titleStyle22: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:32,
    textAlign:'center',
    color:'white',
    alignSelf:'center'
  }),
  titleStyle3: RX.Styles.createTextStyle({
    font:Fonts.displayRegular,
    fontSize:14,
    textAlign:'left',
    color:'gray',
    alignSelf:'center'
  }),
  titleStyle4: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:15,
    textAlign:'center',
    color:'black',
    alignSelf:'center'
  }),
  titleStyle33: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:40,
    textAlign:'left',
    color:'black',
    alignSelf:'flex-start'
  }),
  titleStyle33s: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:32,
    textAlign:'left',
    color:'#FF296D',
    alignSelf:'flex-start'
  }),
  buttomStyle: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:15,
    color:'white',
    textAlign:'center',
    alignSelf:'center'
  }),
  contentStyle: RX.Styles.createTextStyle({
    font:Fonts.displayRegular,
    fontSize:16,
    color:'white',
    textAlign:'center',
    alignSelf:'center'
  }),
  contentStyle2: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:18,
    color:'white',
    textAlign:'center',
    alignSelf:'center'
  }),
  contentStyle3: RX.Styles.createTextStyle({
    font:Fonts.displayBold,
    fontSize:18,
    color:'white',
    textAlign:'center',
    alignSelf:'center'
  })
}

interface Entries {
    img:string;
    imgText:string;
    title:string;
    content:string;
  }
  
import ImageSource from 'modules/images';

const  { Carousel } = require('reactxp-carousel')


import * as UI from '@sproutch/ui';

interface Entries {
    img:string;
    imgText:string;
    title:string;
    content:string;
  }
  
export const HomeHook = ({
    entries,
    isStackNav,
    width,
}: {
	entries:Entries[];
  width:number;
  isStackNav:boolean;
}) => {  

  return ( <RX.View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<RX.View>
  <RX.View style={{flexDirection:'row',marginBottom:10,marginTop:20,alignItems:'center',justifyContent:'center'}}>
<RX.Image
    resizeMode={'cover'}
                    style={ {width:50,height:50} }
                    source={ ImageSource.logo }
                />
    <RX.Text style={[isStackNav?_styles.titleStyle0:_styles.titleStyle,{width:isStackNav?200:350}]}>{"Cultural Spaces Booking"}</RX.Text>
    </RX.View>
</RX.View>
    <RX.View style={{flex:isStackNav?70:50,width:isStackNav?width:undefined,paddingTop:isStackNav?20:0,paddingBottom:isStackNav?20:0,flexDirection:isStackNav?'column':'row',alignItems:'center',justifyContent:'center'}}>
    <UI.Paper elevation={12}  style={{root:[{borderRadius:18,flex:isStackNav?30:50,marginRight:isStackNav?0:10,marginLeft:isStackNav?0:50,alignItems:'center',justifyContent:'center',width:360,height:300}]}}>
   
    <RX.Text style={_styles.titleStyle4}>{'NFT  Marketplace & Visual Media Decentralized Ecosystem'}</RX.Text>
    
    </UI.Paper>
    
    <UI.Paper elevation={12}  style={{root:[{borderRadius:18,flex:isStackNav?70:50,marginTop:isStackNav?10:0,marginRight:isStackNav?0:50,marginLeft:isStackNav?0:10,alignItems:'center',justifyContent:'center',width:360,height:300}]}}>
     <Carousel
       autoplay={true}
       lockScrollWhileSnapping={true}
       data={entries}
       enableMomentum={false}        
       renderItem={({item, index}:{item:Entries,index:number}) => {
         return ( <RX.View  style={{flex:1,alignSelf:'center',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <RX.Image resizeMode={'cover'}
                    style={ {width:360,height:200} }
                    source={ item.img }
                />
                <RX.View style={{width:360,
                height:100,backgroundColor:'white'}}>
                   <RX.Text style={_styles.titleStyle4}>{item.content}</RX.Text>
                 
                  <RX.Text style={_styles.titleStyle3}>{"Created By "+item.title}</RX.Text>
                  
                  </RX.View>
           </RX.View> );
       }}
       sliderWidth={360}
       
       itemWidth={360}
       
       containerCustomStyle={[_styles.slider,]}
       contentContainerCustomStyle={[_styles.sliderContentContainer]}
       layoutCardOffset={0}
       layout={'default'}                 
       scrollEnabled={false}
       loop={true}        
       vertical={false}
       showsHorizontalScrollIndicator={true}
       />    </UI.Paper>
         </RX.View>
         <UI.Paper elevation={12}  style={{root:[{borderRadius:18,flex:isStackNav?30:30,marginTop:isStackNav?0:0,marginRight:isStackNav?0:50,marginLeft:isStackNav?0:50,marginBottom:isStackNav?15:30,alignItems:'center',justifyContent:'center',height:300,width:isStackNav?360:740}]}}>
    
    <RX.Text style={_styles.titleStyle2}>{"Cultural Spaces Booking Status"}</RX.Text>
    </UI.Paper> 
  </RX.View>

	);
};

import * as RX from 'reactxp'

