import {icon} from './home-icons.js';
export function header(logged=false){
 return `<header class="top-bar"><div class="brand"><h1>单词消消乐</h1><p>Word Match</p></div>
 <button class="top-action" type="button" data-route="login">${icon('user')}<span>${logged?'账户':'登录'}</span><small>${logged?'Account':'Log In'}</small></button>
 <button class="top-action" type="button" data-route="settings">${icon('settings')}<span>设置</span><small>Settings</small></button></header>`;
}
