import{r as t,h as s,H as e,g as a}from"./p-62323dce.js";import{u as i}from"./p-283ee974.js";import{o}from"./p-cdf29c75.js";let r=class{constructor(s){t(this,s),this.FLEX_ITEM_TAG_NAME="awesome-flex-item",this.baseFraction=12}baseFractionChanged(t){i("--base-fraction",t.toString(),this.hostElement)}componentWillLoad(){this.baseFractionChanged(this.baseFraction),o.call(this,this.hostElement,[this.notifySizeChangeToItemElements])}render(){return s(e,null,s("slot",null))}notifySizeChangeToItemElements(t){const s=t.contentRect.width;this.hostElement.querySelectorAll(this.FLEX_ITEM_TAG_NAME).forEach((t=>t.containerSizeChanged(s)))}get hostElement(){return a(this)}static get watchers(){return{baseFraction:["baseFractionChanged"]}}};r.style=":host{--xs:0;--sm:540;--md:720;--lg:960;--xl:1140;--xxl:1320}:host{display:flex;flex-wrap:wrap;width:100%;height:auto}";export{r as awesome_flex}