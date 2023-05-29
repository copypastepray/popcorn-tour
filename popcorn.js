/* 
 * Popcorn Tour (pct)
*/
import {tour, kernels} from './kernels.js'
(function (){
    showLog(tour,kernels)
    let cnt = 1
    if(tour.startEl.length > 0){
        // Attach tour to start element (e.g. "Start Tour" button)
        const startEl = document.querySelector(`${tour.startEl}`)
        startEl.addEventListener(tour.startEvent ? tour.startEvent : 'click',() => {pct_show(cnt)})
    }else{
        // autostart on load
        pct_show(cnt)
    }
})()

window.pct_show = function(cnt, action = null) {
    showLog('show me: ',cnt)
    const kernel = kernels[cnt-1]
    const el = document.querySelector(kernel.el)
    let hideCnt = cnt
    if(action=='back'){ pct_hide(hideCnt++,action) }
    if(action=='next'){ pct_hide(hideCnt++,action) }
    buildTooltip(tour,cnt,el,kernel)
    document.querySelector(`#pct_tooltip${cnt}`).setAttribute('data-show', '');
    el.classList.add("pct_hl")
}

window.pct_hide = function(cnt, action = null) {
    action=='back' ? cnt++ : null
    action=='next' ? cnt-- : null
    showLog('hide me: ',cnt)
    document.querySelector(`#pct_tooltip${cnt}`).removeAttribute('data-show');
    document.querySelector(kernels[cnt-1].el).classList.remove("pct_hl")
}

window.pct_exit = function(cnt){
    document.querySelector(`#pct_tooltip${cnt}`).removeAttribute('data-show');
    document.querySelector(kernels[cnt-1].el).classList.remove("pct_hl")
}

function buildTooltip(tour,cnt,el,kernel){
    showLog('build tt: ',cnt)
    tour.highlightColor.length > 0 ? buildHighlight(tour.highlightColor) : null
    let ttWrap = document.createElement('div')
    ttWrap.id = `pct_tooltip${cnt}`
    ttWrap.name = `pct_tooltip${cnt}`
    ttWrap.className = `pct_tooltip`
    ttWrap.innerHTML = buildHeader(cnt, kernel.title) + buildContent(kernel.content) + buildFooter(tour,cnt) + buildArrow()
    document.body.appendChild(ttWrap)
    const tooltip = document.querySelector(`#pct_tooltip${cnt}`)
    Popper.createPopper(el, tooltip, { placement: `${kernel.loc}`,modifiers: [{name: 'offset',options: {offset: [0, 8],}}] }).update()
    tooltip.setAttribute('data-show', '');
};

function buildHighlight(hlcolor){
    if(hlcolor && /^#[0-9A-F]{6}$/i.test(hlcolor)){
    let hlStyle = document.createElement('style')
    hlStyle.innerHTML = `.pct_hl{border: 3px solid ${hlcolor} !important; box-shadow: 0 0 10px ${hlcolor} !important;}`
    document.head.appendChild(hlStyle)
    }
};

function buildHeader(cnt, ktitle){
    let ttHead = `<div class="pct_header">`
    ttHead += `<h2 class="pct_title">${ktitle}</h2>`
    if(tour.hasClose){ ttHead += `<span class="pct_close" onclick="pct_exit(${cnt})">X</span>` }
    ttHead += `</div>`
    return ttHead
};

function buildContent(kcontent){
    return `<div class="pct_content">${kcontent}</div>`
};

function buildFooter(tour,cnt){
    const klen = kernels.length
    let ttFoot = `<div class="pct_footer">`
    ttFoot += `<div class="pct_actions">`
    let showBackBtnClass = '' 
    if(cnt === 1){ showBackBtnClass = 'invis' }
    ttFoot += `<button class="pct_btn pct_back ${showBackBtnClass}" onclick="pct_show(${cnt - 1},'back')">&laquo; Back</button>`
    if(tour.hasStepCount){ttFoot  += `<span class="pct_step_cnt">${cnt} of ${klen}</span>`}
    if(cnt === klen && tour.hasExit!==false){
        ttFoot += `<button class="pct_btn pct_exit" onclick="pct_exit(${cnt})">Exit</button>`
    }else if(cnt === klen && tour.hasExit===false){
        ttFoot += `<button class="pct_btn pct_exit invis">Exit</button>`
    }else{
        ttFoot += `<button class="pct_btn pct_next" onclick="pct_show(${cnt + 1},'next')">Next &raquo;</button>`
    }
    ttFoot  += `</div>` 
    ttFoot  += `</div>`
    return ttFoot
};

function buildArrow(){
    return `<div class="pct_arrow" data-popper-arrow></div>`
};

function showLog(msg,msg2){
    if(tour.debug){
    console.log(msg, msg2)
    }
};