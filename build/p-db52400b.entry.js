import{r as t,c as e,h as a,H as r,g as l}from"./p-62323dce.js";import{u as i}from"./p-283ee974.js";let s=class{constructor(a){t(this,a),this.contentScroll=e(this,"contentScroll",7),this.perspective=1,this.scrollHandler=t=>{const e=t.currentTarget;i("--parallax-scroll-top-px",e.scrollTop.toString(),this.hostElement),i("--parallax-scroll-height-px",e.scrollHeight.toString(),this.hostElement),i("--parallax-view-height-px",e.clientHeight.toString(),this.hostElement),this.contentScroll.emit({scrollTop:e.scrollTop,scrollHeight:e.scrollHeight})}}perspectiveChanged(t){i("--perspective",t.toString(),this.hostElement)}componentDidLoad(){this.perspectiveChanged(this.perspective)}render(){return a(r,null,a("div",{id:"main-container",onScroll:this.scrollHandler},a("slot",null)))}get hostElement(){return l(this)}static get watchers(){return{perspective:["perspectiveChanged"]}}};s.style=":host{--parallax-scroll-ratio:calc(var(--parallax-scroll-top-px) / (var(--parallax-scroll-height-px) - var(--parallax-view-height-px)));display:block;height:100%;width:100%}#main-container{position:relative;overflow-x:hidden;overflow-y:auto;perspective:calc(var(--perspective) * 1px);height:100%;width:100%}";export{s as awesome_parallax}