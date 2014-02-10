// Compiled by ClojureScript 0.0-2138
goog.provide('blog.utils.reactive');
goog.require('cljs.core');
goog.require('blog.utils.helpers');
goog.require('cljs.core.async');
goog.require('blog.utils.helpers');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.net.Jsonp');
goog.require('goog.dom');
goog.require('blog.utils.dom');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.Uri');
goog.require('blog.utils.dom');
blog.utils.reactive.atom_QMARK_ = (function atom_QMARK_(x){return (x instanceof cljs.core.Atom);
});
blog.utils.reactive.keyword__GT_event_type = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),new cljs.core.Keyword(null,"keypress","keypress",1530666166),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,"blur","blur",1016931289),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"keydown","keydown",4493897459),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),new cljs.core.Keyword(null,"keyup","keyup",1115849900),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),new cljs.core.Keyword(null,"dblclick","dblclick",3463991820)],[goog.events.EventType.MOUSEDOWN,goog.events.EventType.KEYPRESS,goog.events.EventType.MOUSEOVER,goog.events.EventType.MOUSEOUT,goog.events.EventType.CLICK,goog.events.EventType.BLUR,goog.events.EventType.FOCUS,goog.events.EventType.KEYDOWN,goog.events.EventType.MOUSEUP,goog.events.EventType.KEYUP,goog.events.EventType.MOUSEMOVE,goog.events.EventType.DBLCLICK]);
blog.utils.reactive.log = (function log(in$){var out = cljs.core.async.chan.call(null);var chan__11055__auto___15916 = in$;var c__8560__auto___15917 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_15898){var state_val_15899 = (state_15898[1]);if((state_val_15899 === 8))
{var inst_15890 = (state_15898[2]);var state_15898__$1 = (function (){var statearr_15900 = state_15898;(statearr_15900[7] = inst_15890);
return statearr_15900;
})();var statearr_15901_15918 = state_15898__$1;(statearr_15901_15918[2] = null);
(statearr_15901_15918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15899 === 7))
{var inst_15894 = (state_15898[2]);var state_15898__$1 = state_15898;var statearr_15902_15919 = state_15898__$1;(statearr_15902_15919[2] = inst_15894);
(statearr_15902_15919[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15899 === 6))
{var state_15898__$1 = state_15898;var statearr_15903_15920 = state_15898__$1;(statearr_15903_15920[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_15903_15920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15899 === 5))
{var inst_15886 = (state_15898[8]);var inst_15888 = console.log(inst_15886);var state_15898__$1 = (function (){var statearr_15904 = state_15898;(statearr_15904[9] = inst_15888);
return statearr_15904;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15898__$1,8,out,inst_15886);
} else
{if((state_val_15899 === 4))
{var inst_15886 = (state_15898[8]);var inst_15886__$1 = (state_15898[2]);var state_15898__$1 = (function (){var statearr_15905 = state_15898;(statearr_15905[8] = inst_15886__$1);
return statearr_15905;
})();if(cljs.core.truth_(inst_15886__$1))
{var statearr_15906_15921 = state_15898__$1;(statearr_15906_15921[1] = 5);
} else
{var statearr_15907_15922 = state_15898__$1;(statearr_15907_15922[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15899 === 3))
{var inst_15896 = (state_15898[2]);var state_15898__$1 = state_15898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15898__$1,inst_15896);
} else
{if((state_val_15899 === 2))
{var state_15898__$1 = state_15898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15898__$1,4,chan__11055__auto___15916);
} else
{if((state_val_15899 === 1))
{var state_15898__$1 = state_15898;var statearr_15908_15923 = state_15898__$1;(statearr_15908_15923[2] = null);
(statearr_15908_15923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_15912 = [null,null,null,null,null,null,null,null,null,null];(statearr_15912[0] = state_machine__8407__auto__);
(statearr_15912[1] = 1);
return statearr_15912;
});
var state_machine__8407__auto____1 = (function (state_15898){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_15898);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e15913){if((e15913 instanceof Object))
{var ex__8410__auto__ = e15913;var statearr_15914_15924 = state_15898;(statearr_15914_15924[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15925 = state_15898;
state_15898 = G__15925;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_15898){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_15898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_15915 = f__8561__auto__.call(null);(statearr_15915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___15917);
return statearr_15915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.listen = (function() {
var listen = null;
var listen__2 = (function (el,type){return listen.call(null,el,type,null);
});
var listen__3 = (function (el,type,f){return listen.call(null,el,type,f,cljs.core.async.chan.call(null));
});
var listen__4 = (function (el,type,f,out){goog.events.listen(el,blog.utils.reactive.keyword__GT_event_type.call(null,type),(function (e){if(cljs.core.truth_(f))
{f.call(null,e);
} else
{}
return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
listen = function(el,type,f,out){
switch(arguments.length){
case 2:
return listen__2.call(this,el,type);
case 3:
return listen__3.call(this,el,type,f);
case 4:
return listen__4.call(this,el,type,f,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$2 = listen__2;
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
listen.cljs$core$IFn$_invoke$arity$4 = listen__4;
return listen;
})()
;
blog.utils.reactive.map = (function map(f,in$){var out = cljs.core.async.chan.call(null);var c__8560__auto___15990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_15973){var state_val_15974 = (state_15973[1]);if((state_val_15974 === 8))
{var inst_15964 = (state_15973[2]);var state_15973__$1 = (function (){var statearr_15975 = state_15973;(statearr_15975[7] = inst_15964);
return statearr_15975;
})();var statearr_15976_15991 = state_15973__$1;(statearr_15976_15991[2] = null);
(statearr_15976_15991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15974 === 7))
{var inst_15969 = (state_15973[2]);var state_15973__$1 = state_15973;var statearr_15977_15992 = state_15973__$1;(statearr_15977_15992[2] = inst_15969);
(statearr_15977_15992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15974 === 6))
{var inst_15967 = cljs.core.async.close_BANG_.call(null,out);var state_15973__$1 = state_15973;var statearr_15978_15993 = state_15973__$1;(statearr_15978_15993[2] = inst_15967);
(statearr_15978_15993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15974 === 5))
{var inst_15960 = (state_15973[8]);var inst_15962 = f.call(null,inst_15960);var state_15973__$1 = state_15973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15973__$1,8,out,inst_15962);
} else
{if((state_val_15974 === 4))
{var inst_15960 = (state_15973[8]);var inst_15960__$1 = (state_15973[2]);var state_15973__$1 = (function (){var statearr_15979 = state_15973;(statearr_15979[8] = inst_15960__$1);
return statearr_15979;
})();if(cljs.core.truth_(inst_15960__$1))
{var statearr_15980_15994 = state_15973__$1;(statearr_15980_15994[1] = 5);
} else
{var statearr_15981_15995 = state_15973__$1;(statearr_15981_15995[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15974 === 3))
{var inst_15971 = (state_15973[2]);var state_15973__$1 = state_15973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15973__$1,inst_15971);
} else
{if((state_val_15974 === 2))
{var state_15973__$1 = state_15973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15973__$1,4,in$);
} else
{if((state_val_15974 === 1))
{var state_15973__$1 = state_15973;var statearr_15982_15996 = state_15973__$1;(statearr_15982_15996[2] = null);
(statearr_15982_15996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_15986 = [null,null,null,null,null,null,null,null,null];(statearr_15986[0] = state_machine__8407__auto__);
(statearr_15986[1] = 1);
return statearr_15986;
});
var state_machine__8407__auto____1 = (function (state_15973){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_15973);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e15987){if((e15987 instanceof Object))
{var ex__8410__auto__ = e15987;var statearr_15988_15997 = state_15973;(statearr_15988_15997[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15973);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15998 = state_15973;
state_15973 = G__15998;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_15973){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_15973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_15989 = f__8561__auto__.call(null);(statearr_15989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___15990);
return statearr_15989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.filter = (function filter(pred,in$){var out = cljs.core.async.chan.call(null);var c__8560__auto___16079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16058){var state_val_16059 = (state_16058[1]);if((state_val_16059 === 1))
{var state_16058__$1 = state_16058;var statearr_16060_16080 = state_16058__$1;(statearr_16060_16080[2] = null);
(statearr_16060_16080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 2))
{var state_16058__$1 = state_16058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16058__$1,4,in$);
} else
{if((state_val_16059 === 3))
{var inst_16056 = (state_16058[2]);var state_16058__$1 = state_16058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16058__$1,inst_16056);
} else
{if((state_val_16059 === 4))
{var inst_16041 = (state_16058[7]);var inst_16041__$1 = (state_16058[2]);var state_16058__$1 = (function (){var statearr_16061 = state_16058;(statearr_16061[7] = inst_16041__$1);
return statearr_16061;
})();if(cljs.core.truth_(inst_16041__$1))
{var statearr_16062_16081 = state_16058__$1;(statearr_16062_16081[1] = 5);
} else
{var statearr_16063_16082 = state_16058__$1;(statearr_16063_16082[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 5))
{var inst_16041 = (state_16058[7]);var inst_16043 = pred.call(null,inst_16041);var state_16058__$1 = state_16058;if(cljs.core.truth_(inst_16043))
{var statearr_16064_16083 = state_16058__$1;(statearr_16064_16083[1] = 8);
} else
{var statearr_16065_16084 = state_16058__$1;(statearr_16065_16084[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 6))
{var inst_16052 = cljs.core.async.close_BANG_.call(null,out);var state_16058__$1 = state_16058;var statearr_16066_16085 = state_16058__$1;(statearr_16066_16085[2] = inst_16052);
(statearr_16066_16085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 7))
{var inst_16054 = (state_16058[2]);var state_16058__$1 = state_16058;var statearr_16067_16086 = state_16058__$1;(statearr_16067_16086[2] = inst_16054);
(statearr_16067_16086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 8))
{var inst_16041 = (state_16058[7]);var state_16058__$1 = state_16058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16058__$1,11,out,inst_16041);
} else
{if((state_val_16059 === 9))
{var state_16058__$1 = state_16058;var statearr_16068_16087 = state_16058__$1;(statearr_16068_16087[2] = null);
(statearr_16068_16087[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 10))
{var inst_16049 = (state_16058[2]);var state_16058__$1 = (function (){var statearr_16069 = state_16058;(statearr_16069[8] = inst_16049);
return statearr_16069;
})();var statearr_16070_16088 = state_16058__$1;(statearr_16070_16088[2] = null);
(statearr_16070_16088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 11))
{var inst_16046 = (state_16058[2]);var state_16058__$1 = state_16058;var statearr_16071_16089 = state_16058__$1;(statearr_16071_16089[2] = inst_16046);
(statearr_16071_16089[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16075 = [null,null,null,null,null,null,null,null,null];(statearr_16075[0] = state_machine__8407__auto__);
(statearr_16075[1] = 1);
return statearr_16075;
});
var state_machine__8407__auto____1 = (function (state_16058){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16058);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16076){if((e16076 instanceof Object))
{var ex__8410__auto__ = e16076;var statearr_16077_16090 = state_16058;(statearr_16077_16090[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16091 = state_16058;
state_16058 = G__16091;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16058){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16078 = f__8561__auto__.call(null);(statearr_16078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16079);
return statearr_16078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.remove = (function remove(f,in$){var out = cljs.core.async.chan.call(null);var c__8560__auto___16172 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16151){var state_val_16152 = (state_16151[1]);if((state_val_16152 === 1))
{var state_16151__$1 = state_16151;var statearr_16153_16173 = state_16151__$1;(statearr_16153_16173[2] = null);
(statearr_16153_16173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16152 === 2))
{var state_16151__$1 = state_16151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16151__$1,4,in$);
} else
{if((state_val_16152 === 3))
{var inst_16149 = (state_16151[2]);var state_16151__$1 = state_16151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16151__$1,inst_16149);
} else
{if((state_val_16152 === 4))
{var inst_16134 = (state_16151[7]);var inst_16134__$1 = (state_16151[2]);var state_16151__$1 = (function (){var statearr_16154 = state_16151;(statearr_16154[7] = inst_16134__$1);
return statearr_16154;
})();if(cljs.core.truth_(inst_16134__$1))
{var statearr_16155_16174 = state_16151__$1;(statearr_16155_16174[1] = 5);
} else
{var statearr_16156_16175 = state_16151__$1;(statearr_16156_16175[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16152 === 5))
{var inst_16134 = (state_16151[7]);var inst_16136 = f.call(null,inst_16134);var state_16151__$1 = state_16151;if(cljs.core.truth_(inst_16136))
{var statearr_16157_16176 = state_16151__$1;(statearr_16157_16176[1] = 8);
} else
{var statearr_16158_16177 = state_16151__$1;(statearr_16158_16177[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16152 === 6))
{var inst_16145 = cljs.core.async.close_BANG_.call(null,out);var state_16151__$1 = state_16151;var statearr_16159_16178 = state_16151__$1;(statearr_16159_16178[2] = inst_16145);
(statearr_16159_16178[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16152 === 7))
{var inst_16147 = (state_16151[2]);var state_16151__$1 = state_16151;var statearr_16160_16179 = state_16151__$1;(statearr_16160_16179[2] = inst_16147);
(statearr_16160_16179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16152 === 8))
{var state_16151__$1 = state_16151;var statearr_16161_16180 = state_16151__$1;(statearr_16161_16180[2] = null);
(statearr_16161_16180[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16152 === 9))
{var inst_16134 = (state_16151[7]);var state_16151__$1 = state_16151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16151__$1,11,out,inst_16134);
} else
{if((state_val_16152 === 10))
{var inst_16142 = (state_16151[2]);var state_16151__$1 = (function (){var statearr_16162 = state_16151;(statearr_16162[8] = inst_16142);
return statearr_16162;
})();var statearr_16163_16181 = state_16151__$1;(statearr_16163_16181[2] = null);
(statearr_16163_16181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16152 === 11))
{var inst_16140 = (state_16151[2]);var state_16151__$1 = state_16151;var statearr_16164_16182 = state_16151__$1;(statearr_16164_16182[2] = inst_16140);
(statearr_16164_16182[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16168 = [null,null,null,null,null,null,null,null,null];(statearr_16168[0] = state_machine__8407__auto__);
(statearr_16168[1] = 1);
return statearr_16168;
});
var state_machine__8407__auto____1 = (function (state_16151){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16151);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16169){if((e16169 instanceof Object))
{var ex__8410__auto__ = e16169;var statearr_16170_16183 = state_16151;(statearr_16170_16183[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16184 = state_16151;
state_16151 = G__16184;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16151){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16171 = f__8561__auto__.call(null);(statearr_16171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16172);
return statearr_16171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.spool = (function spool(xs){var out = cljs.core.async.chan.call(null);var c__8560__auto___16251 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16234){var state_val_16235 = (state_16234[1]);if((state_val_16235 === 7))
{var inst_16219 = (state_16234[7]);var inst_16224 = (state_16234[2]);var inst_16225 = cljs.core.next.call(null,inst_16219);var inst_16219__$1 = inst_16225;var state_16234__$1 = (function (){var statearr_16236 = state_16234;(statearr_16236[8] = inst_16224);
(statearr_16236[7] = inst_16219__$1);
return statearr_16236;
})();var statearr_16237_16252 = state_16234__$1;(statearr_16237_16252[2] = null);
(statearr_16237_16252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16235 === 6))
{var inst_16230 = (state_16234[2]);var state_16234__$1 = state_16234;var statearr_16238_16253 = state_16234__$1;(statearr_16238_16253[2] = inst_16230);
(statearr_16238_16253[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16235 === 5))
{var inst_16228 = cljs.core.async.close_BANG_.call(null,out);var state_16234__$1 = state_16234;var statearr_16239_16254 = state_16234__$1;(statearr_16239_16254[2] = inst_16228);
(statearr_16239_16254[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16235 === 4))
{var inst_16219 = (state_16234[7]);var inst_16222 = cljs.core.first.call(null,inst_16219);var state_16234__$1 = state_16234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16234__$1,7,out,inst_16222);
} else
{if((state_val_16235 === 3))
{var inst_16232 = (state_16234[2]);var state_16234__$1 = state_16234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16234__$1,inst_16232);
} else
{if((state_val_16235 === 2))
{var inst_16219 = (state_16234[7]);var state_16234__$1 = state_16234;if(cljs.core.truth_(inst_16219))
{var statearr_16240_16255 = state_16234__$1;(statearr_16240_16255[1] = 4);
} else
{var statearr_16241_16256 = state_16234__$1;(statearr_16241_16256[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16235 === 1))
{var inst_16218 = cljs.core.seq.call(null,xs);var inst_16219 = inst_16218;var state_16234__$1 = (function (){var statearr_16242 = state_16234;(statearr_16242[7] = inst_16219);
return statearr_16242;
})();var statearr_16243_16257 = state_16234__$1;(statearr_16243_16257[2] = null);
(statearr_16243_16257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16247 = [null,null,null,null,null,null,null,null,null];(statearr_16247[0] = state_machine__8407__auto__);
(statearr_16247[1] = 1);
return statearr_16247;
});
var state_machine__8407__auto____1 = (function (state_16234){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16234);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16248){if((e16248 instanceof Object))
{var ex__8410__auto__ = e16248;var statearr_16249_16258 = state_16234;(statearr_16249_16258[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16234);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16259 = state_16234;
state_16234 = G__16259;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16234){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16250 = f__8561__auto__.call(null);(statearr_16250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16251);
return statearr_16250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.split = (function() {
var split = null;
var split__2 = (function (pred,in$){return split.call(null,pred,in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null),cljs.core.async.chan.call(null)], null));
});
var split__3 = (function (pred,in$,p__16260){var vec__16305 = p__16260;var out1 = cljs.core.nth.call(null,vec__16305,0,null);var out2 = cljs.core.nth.call(null,vec__16305,1,null);var c__8560__auto___16349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16327){var state_val_16328 = (state_16327[1]);if((state_val_16328 === 1))
{var state_16327__$1 = state_16327;var statearr_16329_16350 = state_16327__$1;(statearr_16329_16350[2] = null);
(statearr_16329_16350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16328 === 2))
{var state_16327__$1 = state_16327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16327__$1,4,in$);
} else
{if((state_val_16328 === 3))
{var inst_16325 = (state_16327[2]);var state_16327__$1 = state_16327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16327__$1,inst_16325);
} else
{if((state_val_16328 === 4))
{var inst_16308 = (state_16327[7]);var inst_16308__$1 = (state_16327[2]);var state_16327__$1 = (function (){var statearr_16330 = state_16327;(statearr_16330[7] = inst_16308__$1);
return statearr_16330;
})();if(cljs.core.truth_(inst_16308__$1))
{var statearr_16331_16351 = state_16327__$1;(statearr_16331_16351[1] = 5);
} else
{var statearr_16332_16352 = state_16327__$1;(statearr_16332_16352[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16328 === 5))
{var inst_16308 = (state_16327[7]);var inst_16310 = pred.call(null,inst_16308);var state_16327__$1 = state_16327;if(cljs.core.truth_(inst_16310))
{var statearr_16333_16353 = state_16327__$1;(statearr_16333_16353[1] = 8);
} else
{var statearr_16334_16354 = state_16327__$1;(statearr_16334_16354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16328 === 6))
{var state_16327__$1 = state_16327;var statearr_16335_16355 = state_16327__$1;(statearr_16335_16355[2] = null);
(statearr_16335_16355[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16328 === 7))
{var inst_16323 = (state_16327[2]);var state_16327__$1 = state_16327;var statearr_16336_16356 = state_16327__$1;(statearr_16336_16356[2] = inst_16323);
(statearr_16336_16356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16328 === 8))
{var inst_16308 = (state_16327[7]);var state_16327__$1 = state_16327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16327__$1,11,out1,inst_16308);
} else
{if((state_val_16328 === 9))
{var inst_16308 = (state_16327[7]);var state_16327__$1 = state_16327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16327__$1,12,out2,inst_16308);
} else
{if((state_val_16328 === 10))
{var inst_16320 = (state_16327[2]);var state_16327__$1 = state_16327;var statearr_16337_16357 = state_16327__$1;(statearr_16337_16357[2] = inst_16320);
(statearr_16337_16357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16328 === 11))
{var inst_16313 = (state_16327[2]);var state_16327__$1 = (function (){var statearr_16338 = state_16327;(statearr_16338[8] = inst_16313);
return statearr_16338;
})();var statearr_16339_16358 = state_16327__$1;(statearr_16339_16358[2] = null);
(statearr_16339_16358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16328 === 12))
{var inst_16317 = (state_16327[2]);var state_16327__$1 = (function (){var statearr_16340 = state_16327;(statearr_16340[9] = inst_16317);
return statearr_16340;
})();var statearr_16341_16359 = state_16327__$1;(statearr_16341_16359[2] = null);
(statearr_16341_16359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16345 = [null,null,null,null,null,null,null,null,null,null];(statearr_16345[0] = state_machine__8407__auto__);
(statearr_16345[1] = 1);
return statearr_16345;
});
var state_machine__8407__auto____1 = (function (state_16327){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16327);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16346){if((e16346 instanceof Object))
{var ex__8410__auto__ = e16346;var statearr_16347_16360 = state_16327;(statearr_16347_16360[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16361 = state_16327;
state_16327 = G__16361;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16327){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16348 = f__8561__auto__.call(null);(statearr_16348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16349);
return statearr_16348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out1,out2], null);
});
split = function(pred,in$,p__16260){
switch(arguments.length){
case 2:
return split__2.call(this,pred,in$);
case 3:
return split__3.call(this,pred,in$,p__16260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
blog.utils.reactive.concat = (function concat(xs,in$){var out = cljs.core.async.chan.call(null);var c__8560__auto___16460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16436){var state_val_16437 = (state_16436[1]);if((state_val_16437 === 1))
{var inst_16411 = cljs.core.seq.call(null,xs);var inst_16412 = inst_16411;var state_16436__$1 = (function (){var statearr_16438 = state_16436;(statearr_16438[7] = inst_16412);
return statearr_16438;
})();var statearr_16439_16461 = state_16436__$1;(statearr_16439_16461[2] = null);
(statearr_16439_16461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16437 === 2))
{var inst_16412 = (state_16436[7]);var state_16436__$1 = state_16436;if(cljs.core.truth_(inst_16412))
{var statearr_16440_16462 = state_16436__$1;(statearr_16440_16462[1] = 4);
} else
{var statearr_16441_16463 = state_16436__$1;(statearr_16441_16463[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16437 === 3))
{var inst_16434 = (state_16436[2]);var state_16436__$1 = state_16436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16436__$1,inst_16434);
} else
{if((state_val_16437 === 4))
{var inst_16412 = (state_16436[7]);var inst_16415 = cljs.core.first.call(null,inst_16412);var state_16436__$1 = state_16436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16436__$1,7,out,inst_16415);
} else
{if((state_val_16437 === 5))
{var state_16436__$1 = state_16436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16436__$1,8,in$);
} else
{if((state_val_16437 === 6))
{var inst_16432 = (state_16436[2]);var state_16436__$1 = state_16436;var statearr_16442_16464 = state_16436__$1;(statearr_16442_16464[2] = inst_16432);
(statearr_16442_16464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16437 === 7))
{var inst_16412 = (state_16436[7]);var inst_16417 = (state_16436[2]);var inst_16418 = cljs.core.next.call(null,inst_16412);var inst_16412__$1 = inst_16418;var state_16436__$1 = (function (){var statearr_16443 = state_16436;(statearr_16443[8] = inst_16417);
(statearr_16443[7] = inst_16412__$1);
return statearr_16443;
})();var statearr_16444_16465 = state_16436__$1;(statearr_16444_16465[2] = null);
(statearr_16444_16465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16437 === 8))
{var inst_16422 = (state_16436[9]);var inst_16422__$1 = (state_16436[2]);var state_16436__$1 = (function (){var statearr_16445 = state_16436;(statearr_16445[9] = inst_16422__$1);
return statearr_16445;
})();if(cljs.core.truth_(inst_16422__$1))
{var statearr_16446_16466 = state_16436__$1;(statearr_16446_16466[1] = 9);
} else
{var statearr_16447_16467 = state_16436__$1;(statearr_16447_16467[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16437 === 9))
{var inst_16422 = (state_16436[9]);var state_16436__$1 = state_16436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16436__$1,12,out,inst_16422);
} else
{if((state_val_16437 === 10))
{var inst_16428 = cljs.core.async.close_BANG_.call(null,out);var state_16436__$1 = state_16436;var statearr_16449_16468 = state_16436__$1;(statearr_16449_16468[2] = inst_16428);
(statearr_16449_16468[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16437 === 11))
{var inst_16430 = (state_16436[2]);var state_16436__$1 = state_16436;var statearr_16450_16469 = state_16436__$1;(statearr_16450_16469[2] = inst_16430);
(statearr_16450_16469[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16437 === 12))
{var inst_16412 = (state_16436[7]);var inst_16425 = (state_16436[2]);var tmp16448 = inst_16412;var inst_16412__$1 = tmp16448;var state_16436__$1 = (function (){var statearr_16451 = state_16436;(statearr_16451[10] = inst_16425);
(statearr_16451[7] = inst_16412__$1);
return statearr_16451;
})();var statearr_16452_16470 = state_16436__$1;(statearr_16452_16470[2] = null);
(statearr_16452_16470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16456 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16456[0] = state_machine__8407__auto__);
(statearr_16456[1] = 1);
return statearr_16456;
});
var state_machine__8407__auto____1 = (function (state_16436){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16436);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16457){if((e16457 instanceof Object))
{var ex__8410__auto__ = e16457;var statearr_16458_16471 = state_16436;(statearr_16458_16471[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16472 = state_16436;
state_16436 = G__16472;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16436){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16459 = f__8561__auto__.call(null);(statearr_16459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16460);
return statearr_16459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.distinct = (function distinct(in$){var out = cljs.core.async.chan.call(null);var c__8560__auto___16557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16535){var state_val_16536 = (state_16535[1]);if((state_val_16536 === 1))
{var inst_16515 = null;var state_16535__$1 = (function (){var statearr_16537 = state_16535;(statearr_16537[7] = inst_16515);
return statearr_16537;
})();var statearr_16538_16558 = state_16535__$1;(statearr_16538_16558[2] = null);
(statearr_16538_16558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16536 === 2))
{var state_16535__$1 = state_16535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16535__$1,4,in$);
} else
{if((state_val_16536 === 3))
{var inst_16533 = (state_16535[2]);var state_16535__$1 = state_16535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16535__$1,inst_16533);
} else
{if((state_val_16536 === 4))
{var inst_16518 = (state_16535[8]);var inst_16518__$1 = (state_16535[2]);var state_16535__$1 = (function (){var statearr_16539 = state_16535;(statearr_16539[8] = inst_16518__$1);
return statearr_16539;
})();if(cljs.core.truth_(inst_16518__$1))
{var statearr_16540_16559 = state_16535__$1;(statearr_16540_16559[1] = 5);
} else
{var statearr_16541_16560 = state_16535__$1;(statearr_16541_16560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16536 === 5))
{var inst_16515 = (state_16535[7]);var inst_16518 = (state_16535[8]);var inst_16520 = cljs.core.not_EQ_.call(null,inst_16518,inst_16515);var state_16535__$1 = state_16535;if(inst_16520)
{var statearr_16542_16561 = state_16535__$1;(statearr_16542_16561[1] = 8);
} else
{var statearr_16543_16562 = state_16535__$1;(statearr_16543_16562[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16536 === 6))
{var inst_16529 = cljs.core.async.close_BANG_.call(null,out);var state_16535__$1 = state_16535;var statearr_16544_16563 = state_16535__$1;(statearr_16544_16563[2] = inst_16529);
(statearr_16544_16563[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16536 === 7))
{var inst_16531 = (state_16535[2]);var state_16535__$1 = state_16535;var statearr_16545_16564 = state_16535__$1;(statearr_16545_16564[2] = inst_16531);
(statearr_16545_16564[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16536 === 8))
{var inst_16518 = (state_16535[8]);var state_16535__$1 = state_16535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16535__$1,11,out,inst_16518);
} else
{if((state_val_16536 === 9))
{var state_16535__$1 = state_16535;var statearr_16546_16565 = state_16535__$1;(statearr_16546_16565[2] = null);
(statearr_16546_16565[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16536 === 10))
{var inst_16518 = (state_16535[8]);var inst_16526 = (state_16535[2]);var inst_16515 = inst_16518;var state_16535__$1 = (function (){var statearr_16547 = state_16535;(statearr_16547[7] = inst_16515);
(statearr_16547[9] = inst_16526);
return statearr_16547;
})();var statearr_16548_16566 = state_16535__$1;(statearr_16548_16566[2] = null);
(statearr_16548_16566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16536 === 11))
{var inst_16523 = (state_16535[2]);var state_16535__$1 = state_16535;var statearr_16549_16567 = state_16535__$1;(statearr_16549_16567[2] = inst_16523);
(statearr_16549_16567[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16553 = [null,null,null,null,null,null,null,null,null,null];(statearr_16553[0] = state_machine__8407__auto__);
(statearr_16553[1] = 1);
return statearr_16553;
});
var state_machine__8407__auto____1 = (function (state_16535){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16535);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16554){if((e16554 instanceof Object))
{var ex__8410__auto__ = e16554;var statearr_16555_16568 = state_16535;(statearr_16555_16568[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16569 = state_16535;
state_16535 = G__16569;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16535){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16556 = f__8561__auto__.call(null);(statearr_16556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16557);
return statearr_16556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.fan_in = (function() {
var fan_in = null;
var fan_in__1 = (function (ins){return fan_in.call(null,ins,cljs.core.async.chan.call(null));
});
var fan_in__2 = (function (ins,out){var c__8560__auto___16678 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16653){var state_val_16654 = (state_16653[1]);if((state_val_16654 === 1))
{var inst_16624 = cljs.core.vec.call(null,ins);var inst_16625 = inst_16624;var state_16653__$1 = (function (){var statearr_16655 = state_16653;(statearr_16655[7] = inst_16625);
return statearr_16655;
})();var statearr_16656_16679 = state_16653__$1;(statearr_16656_16679[2] = null);
(statearr_16656_16679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16654 === 2))
{var inst_16625 = (state_16653[7]);var inst_16627 = cljs.core.count.call(null,inst_16625);var inst_16628 = (inst_16627 > 0);var state_16653__$1 = state_16653;if(cljs.core.truth_(inst_16628))
{var statearr_16657_16680 = state_16653__$1;(statearr_16657_16680[1] = 4);
} else
{var statearr_16658_16681 = state_16653__$1;(statearr_16658_16681[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16654 === 3))
{var inst_16650 = (state_16653[2]);var inst_16651 = cljs.core.async.close_BANG_.call(null,out);var state_16653__$1 = (function (){var statearr_16659 = state_16653;(statearr_16659[8] = inst_16650);
return statearr_16659;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16653__$1,inst_16651);
} else
{if((state_val_16654 === 4))
{var inst_16625 = (state_16653[7]);var state_16653__$1 = state_16653;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16653__$1,7,inst_16625);
} else
{if((state_val_16654 === 5))
{var state_16653__$1 = state_16653;var statearr_16660_16682 = state_16653__$1;(statearr_16660_16682[2] = null);
(statearr_16660_16682[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16654 === 6))
{var inst_16648 = (state_16653[2]);var state_16653__$1 = state_16653;var statearr_16661_16683 = state_16653__$1;(statearr_16661_16683[2] = inst_16648);
(statearr_16661_16683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16654 === 7))
{var inst_16633 = (state_16653[9]);var inst_16632 = (state_16653[2]);var inst_16633__$1 = cljs.core.nth.call(null,inst_16632,0,null);var inst_16634 = cljs.core.nth.call(null,inst_16632,1,null);var state_16653__$1 = (function (){var statearr_16662 = state_16653;(statearr_16662[10] = inst_16634);
(statearr_16662[9] = inst_16633__$1);
return statearr_16662;
})();if(cljs.core.truth_(inst_16633__$1))
{var statearr_16663_16684 = state_16653__$1;(statearr_16663_16684[1] = 8);
} else
{var statearr_16664_16685 = state_16653__$1;(statearr_16664_16685[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16654 === 8))
{var inst_16633 = (state_16653[9]);var state_16653__$1 = state_16653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16653__$1,11,out,inst_16633);
} else
{if((state_val_16654 === 9))
{var state_16653__$1 = state_16653;var statearr_16666_16686 = state_16653__$1;(statearr_16666_16686[2] = null);
(statearr_16666_16686[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16654 === 10))
{var inst_16634 = (state_16653[10]);var inst_16625 = (state_16653[7]);var inst_16641 = (state_16653[2]);var inst_16642 = cljs.core.set.call(null,inst_16625);var inst_16643 = cljs.core.disj.call(null,inst_16642,inst_16634);var inst_16644 = cljs.core.vec.call(null,inst_16643);var inst_16625__$1 = inst_16644;var state_16653__$1 = (function (){var statearr_16667 = state_16653;(statearr_16667[7] = inst_16625__$1);
(statearr_16667[11] = inst_16641);
return statearr_16667;
})();var statearr_16668_16687 = state_16653__$1;(statearr_16668_16687[2] = null);
(statearr_16668_16687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16654 === 11))
{var inst_16625 = (state_16653[7]);var inst_16637 = (state_16653[2]);var tmp16665 = inst_16625;var inst_16625__$1 = tmp16665;var state_16653__$1 = (function (){var statearr_16669 = state_16653;(statearr_16669[7] = inst_16625__$1);
(statearr_16669[12] = inst_16637);
return statearr_16669;
})();var statearr_16670_16688 = state_16653__$1;(statearr_16670_16688[2] = null);
(statearr_16670_16688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16674 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16674[0] = state_machine__8407__auto__);
(statearr_16674[1] = 1);
return statearr_16674;
});
var state_machine__8407__auto____1 = (function (state_16653){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16653);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16675){if((e16675 instanceof Object))
{var ex__8410__auto__ = e16675;var statearr_16676_16689 = state_16653;(statearr_16676_16689[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16690 = state_16653;
state_16653 = G__16690;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16653){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16677 = f__8561__auto__.call(null);(statearr_16677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16678);
return statearr_16677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
fan_in = function(ins,out){
switch(arguments.length){
case 1:
return fan_in__1.call(this,ins);
case 2:
return fan_in__2.call(this,ins,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fan_in.cljs$core$IFn$_invoke$arity$1 = fan_in__1;
fan_in.cljs$core$IFn$_invoke$arity$2 = fan_in__2;
return fan_in;
})()
;
blog.utils.reactive.take_until = (function() {
var take_until = null;
var take_until__2 = (function (pred_sentinel,in$){return take_until.call(null,pred_sentinel,in$,cljs.core.async.chan.call(null));
});
var take_until__3 = (function (pred_sentinel,in$,out){var c__8560__auto___16775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16754){var state_val_16755 = (state_16754[1]);if((state_val_16755 === 1))
{var state_16754__$1 = state_16754;var statearr_16756_16776 = state_16754__$1;(statearr_16756_16776[2] = null);
(statearr_16756_16776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16755 === 2))
{var state_16754__$1 = state_16754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16754__$1,4,in$);
} else
{if((state_val_16755 === 3))
{var inst_16752 = (state_16754[2]);var state_16754__$1 = state_16754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16754__$1,inst_16752);
} else
{if((state_val_16755 === 4))
{var inst_16735 = (state_16754[7]);var inst_16735__$1 = (state_16754[2]);var state_16754__$1 = (function (){var statearr_16757 = state_16754;(statearr_16757[7] = inst_16735__$1);
return statearr_16757;
})();if(cljs.core.truth_(inst_16735__$1))
{var statearr_16758_16777 = state_16754__$1;(statearr_16758_16777[1] = 5);
} else
{var statearr_16759_16778 = state_16754__$1;(statearr_16759_16778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16755 === 5))
{var inst_16735 = (state_16754[7]);var state_16754__$1 = state_16754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16754__$1,8,out,inst_16735);
} else
{if((state_val_16755 === 6))
{var inst_16748 = cljs.core.async.close_BANG_.call(null,out);var state_16754__$1 = state_16754;var statearr_16760_16779 = state_16754__$1;(statearr_16760_16779[2] = inst_16748);
(statearr_16760_16779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16755 === 7))
{var inst_16750 = (state_16754[2]);var state_16754__$1 = state_16754;var statearr_16761_16780 = state_16754__$1;(statearr_16761_16780[2] = inst_16750);
(statearr_16761_16780[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16755 === 8))
{var inst_16735 = (state_16754[7]);var inst_16738 = (state_16754[2]);var inst_16739 = pred_sentinel.call(null,inst_16735);var inst_16740 = cljs.core.not.call(null,inst_16739);var state_16754__$1 = (function (){var statearr_16762 = state_16754;(statearr_16762[8] = inst_16738);
return statearr_16762;
})();if(inst_16740)
{var statearr_16763_16781 = state_16754__$1;(statearr_16763_16781[1] = 9);
} else
{var statearr_16764_16782 = state_16754__$1;(statearr_16764_16782[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16755 === 9))
{var state_16754__$1 = state_16754;var statearr_16765_16783 = state_16754__$1;(statearr_16765_16783[2] = null);
(statearr_16765_16783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16755 === 10))
{var inst_16744 = cljs.core.async.close_BANG_.call(null,out);var state_16754__$1 = state_16754;var statearr_16766_16784 = state_16754__$1;(statearr_16766_16784[2] = inst_16744);
(statearr_16766_16784[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16755 === 11))
{var inst_16746 = (state_16754[2]);var state_16754__$1 = state_16754;var statearr_16767_16785 = state_16754__$1;(statearr_16767_16785[2] = inst_16746);
(statearr_16767_16785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16771 = [null,null,null,null,null,null,null,null,null];(statearr_16771[0] = state_machine__8407__auto__);
(statearr_16771[1] = 1);
return statearr_16771;
});
var state_machine__8407__auto____1 = (function (state_16754){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16754);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16772){if((e16772 instanceof Object))
{var ex__8410__auto__ = e16772;var statearr_16773_16786 = state_16754;(statearr_16773_16786[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16787 = state_16754;
state_16754 = G__16787;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16754){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16774 = f__8561__auto__.call(null);(statearr_16774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16775);
return statearr_16774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
take_until = function(pred_sentinel,in$,out){
switch(arguments.length){
case 2:
return take_until__2.call(this,pred_sentinel,in$);
case 3:
return take_until__3.call(this,pred_sentinel,in$,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_until.cljs$core$IFn$_invoke$arity$2 = take_until__2;
take_until.cljs$core$IFn$_invoke$arity$3 = take_until__3;
return take_until;
})()
;
blog.utils.reactive.siphon = (function() {
var siphon = null;
var siphon__1 = (function (in$){return siphon.call(null,in$,cljs.core.PersistentVector.EMPTY);
});
var siphon__2 = (function (in$,coll){var c__8560__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16832){var state_val_16833 = (state_16832[1]);if((state_val_16833 === 7))
{var inst_16828 = (state_16832[2]);var state_16832__$1 = state_16832;var statearr_16834_16850 = state_16832__$1;(statearr_16834_16850[2] = inst_16828);
(statearr_16834_16850[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16833 === 6))
{var inst_16819 = (state_16832[7]);var state_16832__$1 = state_16832;var statearr_16835_16851 = state_16832__$1;(statearr_16835_16851[2] = inst_16819);
(statearr_16835_16851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16833 === 5))
{var inst_16822 = (state_16832[8]);var inst_16819 = (state_16832[7]);var inst_16824 = cljs.core.conj.call(null,inst_16819,inst_16822);var inst_16819__$1 = inst_16824;var state_16832__$1 = (function (){var statearr_16836 = state_16832;(statearr_16836[7] = inst_16819__$1);
return statearr_16836;
})();var statearr_16837_16852 = state_16832__$1;(statearr_16837_16852[2] = null);
(statearr_16837_16852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16833 === 4))
{var inst_16822 = (state_16832[8]);var inst_16822__$1 = (state_16832[2]);var state_16832__$1 = (function (){var statearr_16838 = state_16832;(statearr_16838[8] = inst_16822__$1);
return statearr_16838;
})();if(cljs.core.truth_(inst_16822__$1))
{var statearr_16839_16853 = state_16832__$1;(statearr_16839_16853[1] = 5);
} else
{var statearr_16840_16854 = state_16832__$1;(statearr_16840_16854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16833 === 3))
{var inst_16830 = (state_16832[2]);var state_16832__$1 = state_16832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16832__$1,inst_16830);
} else
{if((state_val_16833 === 2))
{var state_16832__$1 = state_16832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16832__$1,4,in$);
} else
{if((state_val_16833 === 1))
{var inst_16819 = coll;var state_16832__$1 = (function (){var statearr_16841 = state_16832;(statearr_16841[7] = inst_16819);
return statearr_16841;
})();var statearr_16842_16855 = state_16832__$1;(statearr_16842_16855[2] = null);
(statearr_16842_16855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16846 = [null,null,null,null,null,null,null,null,null];(statearr_16846[0] = state_machine__8407__auto__);
(statearr_16846[1] = 1);
return statearr_16846;
});
var state_machine__8407__auto____1 = (function (state_16832){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16832);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16847){if((e16847 instanceof Object))
{var ex__8410__auto__ = e16847;var statearr_16848_16856 = state_16832;(statearr_16848_16856[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16857 = state_16832;
state_16832 = G__16857;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16832){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16849 = f__8561__auto__.call(null);(statearr_16849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto__);
return statearr_16849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return c__8560__auto__;
});
siphon = function(in$,coll){
switch(arguments.length){
case 1:
return siphon__1.call(this,in$);
case 2:
return siphon__2.call(this,in$,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
siphon.cljs$core$IFn$_invoke$arity$1 = siphon__1;
siphon.cljs$core$IFn$_invoke$arity$2 = siphon__2;
return siphon;
})()
;
blog.utils.reactive.always = (function always(v,c){var out = cljs.core.async.chan.call(null);var c__8560__auto___16918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_16902){var state_val_16903 = (state_16902[1]);if((state_val_16903 === 8))
{var inst_16893 = (state_16902[2]);var state_16902__$1 = (function (){var statearr_16904 = state_16902;(statearr_16904[7] = inst_16893);
return statearr_16904;
})();var statearr_16905_16919 = state_16902__$1;(statearr_16905_16919[2] = null);
(statearr_16905_16919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16903 === 7))
{var inst_16898 = (state_16902[2]);var state_16902__$1 = state_16902;var statearr_16906_16920 = state_16902__$1;(statearr_16906_16920[2] = inst_16898);
(statearr_16906_16920[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16903 === 6))
{var inst_16896 = cljs.core.async.close_BANG_.call(null,out);var state_16902__$1 = state_16902;var statearr_16907_16921 = state_16902__$1;(statearr_16907_16921[2] = inst_16896);
(statearr_16907_16921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16903 === 5))
{var state_16902__$1 = state_16902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16902__$1,8,out,v);
} else
{if((state_val_16903 === 4))
{var inst_16890 = (state_16902[2]);var state_16902__$1 = state_16902;if(cljs.core.truth_(inst_16890))
{var statearr_16908_16922 = state_16902__$1;(statearr_16908_16922[1] = 5);
} else
{var statearr_16909_16923 = state_16902__$1;(statearr_16909_16923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16903 === 3))
{var inst_16900 = (state_16902[2]);var state_16902__$1 = state_16902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16902__$1,inst_16900);
} else
{if((state_val_16903 === 2))
{var state_16902__$1 = state_16902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16902__$1,4,c);
} else
{if((state_val_16903 === 1))
{var state_16902__$1 = state_16902;var statearr_16910_16924 = state_16902__$1;(statearr_16910_16924[2] = null);
(statearr_16910_16924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_16914 = [null,null,null,null,null,null,null,null];(statearr_16914[0] = state_machine__8407__auto__);
(statearr_16914[1] = 1);
return statearr_16914;
});
var state_machine__8407__auto____1 = (function (state_16902){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_16902);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e16915){if((e16915 instanceof Object))
{var ex__8410__auto__ = e16915;var statearr_16916_16925 = state_16902;(statearr_16916_16925[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16926 = state_16902;
state_16902 = G__16926;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_16902){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_16902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_16917 = f__8561__auto__.call(null);(statearr_16917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___16918);
return statearr_16917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.toggle = (function toggle(in$){var out = cljs.core.async.chan.call(null);var control = cljs.core.async.chan.call(null);var c__8560__auto___17075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_17043){var state_val_17044 = (state_17043[1]);if((state_val_17044 === 1))
{var inst_17001 = true;var state_17043__$1 = (function (){var statearr_17045 = state_17043;(statearr_17045[7] = inst_17001);
return statearr_17045;
})();var statearr_17046_17076 = state_17043__$1;(statearr_17046_17076[2] = null);
(statearr_17046_17076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 2))
{var inst_17008 = [in$,control];var inst_17009 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17008,null));var state_17043__$1 = state_17043;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17043__$1,4,inst_17009);
} else
{if((state_val_17044 === 3))
{var inst_17041 = (state_17043[2]);var state_17043__$1 = state_17043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17043__$1,inst_17041);
} else
{if((state_val_17044 === 4))
{var inst_17011 = (state_17043[8]);var inst_17013 = (state_17043[9]);var inst_17011__$1 = (state_17043[2]);var inst_17012 = cljs.core.nth.call(null,inst_17011__$1,0,null);var inst_17013__$1 = cljs.core.nth.call(null,inst_17011__$1,1,null);var inst_17014 = cljs.core._EQ_.call(null,inst_17013__$1,in$);var state_17043__$1 = (function (){var statearr_17047 = state_17043;(statearr_17047[8] = inst_17011__$1);
(statearr_17047[9] = inst_17013__$1);
(statearr_17047[10] = inst_17012);
return statearr_17047;
})();if(inst_17014)
{var statearr_17048_17077 = state_17043__$1;(statearr_17048_17077[1] = 5);
} else
{var statearr_17049_17078 = state_17043__$1;(statearr_17049_17078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 5))
{var inst_17001 = (state_17043[7]);var inst_17011 = (state_17043[8]);var inst_17017 = cljs.core.nth.call(null,inst_17011,0,null);var state_17043__$1 = (function (){var statearr_17050 = state_17043;(statearr_17050[11] = inst_17017);
return statearr_17050;
})();if(cljs.core.truth_(inst_17001))
{var statearr_17051_17079 = state_17043__$1;(statearr_17051_17079[1] = 8);
} else
{var statearr_17052_17080 = state_17043__$1;(statearr_17052_17080[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 6))
{var inst_17013 = (state_17043[9]);var inst_17025 = cljs.core._EQ_.call(null,inst_17013,control);var state_17043__$1 = state_17043;if(inst_17025)
{var statearr_17053_17081 = state_17043__$1;(statearr_17053_17081[1] = 12);
} else
{var statearr_17054_17082 = state_17043__$1;(statearr_17054_17082[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 7))
{var inst_17038 = (state_17043[2]);var inst_17001 = inst_17038;var state_17043__$1 = (function (){var statearr_17055 = state_17043;(statearr_17055[7] = inst_17001);
return statearr_17055;
})();var statearr_17056_17083 = state_17043__$1;(statearr_17056_17083[2] = null);
(statearr_17056_17083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 8))
{var inst_17017 = (state_17043[11]);var state_17043__$1 = state_17043;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17043__$1,11,out,inst_17017);
} else
{if((state_val_17044 === 9))
{var state_17043__$1 = state_17043;var statearr_17057_17084 = state_17043__$1;(statearr_17057_17084[2] = null);
(statearr_17057_17084[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 10))
{var inst_17001 = (state_17043[7]);var inst_17023 = (state_17043[2]);var state_17043__$1 = (function (){var statearr_17058 = state_17043;(statearr_17058[12] = inst_17023);
return statearr_17058;
})();var statearr_17059_17085 = state_17043__$1;(statearr_17059_17085[2] = inst_17001);
(statearr_17059_17085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 11))
{var inst_17020 = (state_17043[2]);var state_17043__$1 = state_17043;var statearr_17060_17086 = state_17043__$1;(statearr_17060_17086[2] = inst_17020);
(statearr_17060_17086[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 12))
{var inst_17011 = (state_17043[8]);var inst_17028 = cljs.core.nth.call(null,inst_17011,0,null);var state_17043__$1 = state_17043;var statearr_17061_17087 = state_17043__$1;(statearr_17061_17087[2] = inst_17028);
(statearr_17061_17087[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 13))
{var inst_17013 = (state_17043[9]);var inst_17030 = cljs.core._EQ_.call(null,inst_17013,new cljs.core.Keyword(null,"default","default",2558708147));var state_17043__$1 = state_17043;if(inst_17030)
{var statearr_17062_17088 = state_17043__$1;(statearr_17062_17088[1] = 15);
} else
{var statearr_17063_17089 = state_17043__$1;(statearr_17063_17089[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 14))
{var inst_17036 = (state_17043[2]);var state_17043__$1 = state_17043;var statearr_17064_17090 = state_17043__$1;(statearr_17064_17090[2] = inst_17036);
(statearr_17064_17090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 15))
{var inst_17012 = (state_17043[10]);var state_17043__$1 = state_17043;var statearr_17065_17091 = state_17043__$1;(statearr_17065_17091[2] = inst_17012);
(statearr_17065_17091[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 16))
{var state_17043__$1 = state_17043;var statearr_17066_17092 = state_17043__$1;(statearr_17066_17092[2] = null);
(statearr_17066_17092[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17044 === 17))
{var inst_17034 = (state_17043[2]);var state_17043__$1 = state_17043;var statearr_17067_17093 = state_17043__$1;(statearr_17067_17093[2] = inst_17034);
(statearr_17067_17093[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_17071 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17071[0] = state_machine__8407__auto__);
(statearr_17071[1] = 1);
return statearr_17071;
});
var state_machine__8407__auto____1 = (function (state_17043){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_17043);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e17072){if((e17072 instanceof Object))
{var ex__8410__auto__ = e17072;var statearr_17073_17094 = state_17043;(statearr_17073_17094[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17043);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17095 = state_17043;
state_17043 = G__17095;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_17043){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_17043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_17074 = f__8561__auto__.call(null);(statearr_17074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___17075);
return statearr_17074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan","chan",1016956612),out,new cljs.core.Keyword(null,"control","control",1965447375),control], null);
});
blog.utils.reactive.barrier = (function barrier(cs){var c__8560__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_17148){var state_val_17149 = (state_17148[1]);if((state_val_17149 === 7))
{var inst_17136 = (state_17148[7]);var inst_17133 = (state_17148[8]);var inst_17139 = (state_17148[2]);var inst_17140 = cljs.core.conj.call(null,inst_17133,inst_17139);var inst_17132 = inst_17136;var inst_17133__$1 = inst_17140;var state_17148__$1 = (function (){var statearr_17150 = state_17148;(statearr_17150[9] = inst_17132);
(statearr_17150[8] = inst_17133__$1);
return statearr_17150;
})();var statearr_17151_17166 = state_17148__$1;(statearr_17151_17166[2] = null);
(statearr_17151_17166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17149 === 6))
{var inst_17144 = (state_17148[2]);var state_17148__$1 = state_17148;var statearr_17152_17167 = state_17148__$1;(statearr_17152_17167[2] = inst_17144);
(statearr_17152_17167[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17149 === 5))
{var inst_17133 = (state_17148[8]);var state_17148__$1 = state_17148;var statearr_17153_17168 = state_17148__$1;(statearr_17153_17168[2] = inst_17133);
(statearr_17153_17168[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17149 === 4))
{var inst_17132 = (state_17148[9]);var inst_17136 = cljs.core.next.call(null,inst_17132);var inst_17137 = cljs.core.first.call(null,inst_17132);var state_17148__$1 = (function (){var statearr_17154 = state_17148;(statearr_17154[7] = inst_17136);
return statearr_17154;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17148__$1,7,inst_17137);
} else
{if((state_val_17149 === 3))
{var inst_17146 = (state_17148[2]);var state_17148__$1 = state_17148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17148__$1,inst_17146);
} else
{if((state_val_17149 === 2))
{var inst_17132 = (state_17148[9]);var state_17148__$1 = state_17148;if(cljs.core.truth_(inst_17132))
{var statearr_17155_17169 = state_17148__$1;(statearr_17155_17169[1] = 4);
} else
{var statearr_17156_17170 = state_17148__$1;(statearr_17156_17170[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17149 === 1))
{var inst_17131 = cljs.core.seq.call(null,cs);var inst_17132 = inst_17131;var inst_17133 = cljs.core.PersistentVector.EMPTY;var state_17148__$1 = (function (){var statearr_17157 = state_17148;(statearr_17157[9] = inst_17132);
(statearr_17157[8] = inst_17133);
return statearr_17157;
})();var statearr_17158_17171 = state_17148__$1;(statearr_17158_17171[2] = null);
(statearr_17158_17171[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_17162 = [null,null,null,null,null,null,null,null,null,null];(statearr_17162[0] = state_machine__8407__auto__);
(statearr_17162[1] = 1);
return statearr_17162;
});
var state_machine__8407__auto____1 = (function (state_17148){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_17148);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e17163){if((e17163 instanceof Object))
{var ex__8410__auto__ = e17163;var statearr_17164_17172 = state_17148;(statearr_17164_17172[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17173 = state_17148;
state_17148 = G__17173;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_17148){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_17148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_17165 = f__8561__auto__.call(null);(statearr_17165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto__);
return statearr_17165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return c__8560__auto__;
});
blog.utils.reactive.cyclic_barrier = (function cyclic_barrier(cs){var out = cljs.core.async.chan.call(null);var c__8560__auto___17218 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_17206){var state_val_17207 = (state_17206[1]);if((state_val_17207 === 5))
{var inst_17199 = (state_17206[2]);var state_17206__$1 = state_17206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17206__$1,4,out,inst_17199);
} else
{if((state_val_17207 === 4))
{var inst_17201 = (state_17206[2]);var state_17206__$1 = (function (){var statearr_17208 = state_17206;(statearr_17208[7] = inst_17201);
return statearr_17208;
})();var statearr_17209_17219 = state_17206__$1;(statearr_17209_17219[2] = null);
(statearr_17209_17219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17207 === 3))
{var inst_17204 = (state_17206[2]);var state_17206__$1 = state_17206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17206__$1,inst_17204);
} else
{if((state_val_17207 === 2))
{var inst_17197 = blog.utils.reactive.barrier.call(null,cs);var state_17206__$1 = state_17206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17206__$1,5,inst_17197);
} else
{if((state_val_17207 === 1))
{var state_17206__$1 = state_17206;var statearr_17210_17220 = state_17206__$1;(statearr_17210_17220[2] = null);
(statearr_17210_17220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_17214 = [null,null,null,null,null,null,null,null];(statearr_17214[0] = state_machine__8407__auto__);
(statearr_17214[1] = 1);
return statearr_17214;
});
var state_machine__8407__auto____1 = (function (state_17206){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_17206);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e17215){if((e17215 instanceof Object))
{var ex__8410__auto__ = e17215;var statearr_17216_17221 = state_17206;(statearr_17216_17221[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17222 = state_17206;
state_17206 = G__17222;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_17206){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_17206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_17217 = f__8561__auto__.call(null);(statearr_17217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___17218);
return statearr_17217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.utils.reactive.mouse_enter = (function mouse_enter(el){var matcher = blog.utils.dom.el_matcher.call(null,el);return blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594)),blog.utils.reactive.filter.call(null,(function (e){var and__4912__auto__ = (el === e.target);if(and__4912__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__4912__auto__;
}
}),blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963))));
});
blog.utils.reactive.mouse_leave = (function mouse_leave(el){var matcher = blog.utils.dom.el_matcher.call(null,el);return blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"leave","leave",1116750377)),blog.utils.reactive.filter.call(null,(function (e){var and__4912__auto__ = (el === e.target);if(and__4912__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__4912__auto__;
}
}),blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));
});
blog.utils.reactive.hover = (function hover(el){return blog.utils.reactive.distinct.call(null,blog.utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.reactive.mouse_enter.call(null,el),blog.utils.reactive.mouse_leave.call(null,el)], null)));
});
blog.utils.reactive.hover_child = (function hover_child(el,tag){var matcher = blog.utils.dom.tag_match.call(null,tag);var over = blog.utils.reactive.map.call(null,((function (matcher){
return (function (p1__17224_SHARP_){return blog.utils.helpers.index_of.call(null,blog.utils.dom.by_tag_name.call(null,el,tag),p1__17224_SHARP_);
});})(matcher))
,blog.utils.reactive.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-match","no-match",570153515),null], null), null),blog.utils.reactive.map.call(null,((function (matcher){
return (function (p1__17223_SHARP_){var target = p1__17223_SHARP_.target;if(cljs.core.truth_(matcher.call(null,target)))
{return target;
} else
{var temp__4090__auto__ = goog.dom.getAncestor(target,matcher);if(cljs.core.truth_(temp__4090__auto__))
{var el__$1 = temp__4090__auto__;return el__$1;
} else
{return new cljs.core.Keyword(null,"no-match","no-match",570153515);
}
}
});})(matcher))
,blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963)))));var out = blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"clear","clear",1108650431)),blog.utils.reactive.filter.call(null,((function (matcher,over){
return (function (e){var and__4912__auto__ = matcher.call(null,e.target);if(cljs.core.truth_(and__4912__auto__))
{var rel_target = e.relatedTarget;var rel_target__$1 = ((rel_target == null)) || (cljs.core.not.call(null,matcher.call(null,rel_target)));return rel_target__$1;
} else
{return and__4912__auto__;
}
});})(matcher,over))
,blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));return blog.utils.reactive.distinct.call(null,blog.utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [over,out], null)));
});
blog.utils.reactive.jsonp = (function() {
var jsonp = null;
var jsonp__1 = (function (uri){return jsonp.call(null,cljs.core.async.chan.call(null),uri);
});
var jsonp__2 = (function (c,uri){var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));gjsonp.send(null,(function (p1__17225_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__17225_SHARP_);
}));
return c;
});
jsonp = function(c,uri){
switch(arguments.length){
case 1:
return jsonp__1.call(this,c);
case 2:
return jsonp__2.call(this,c,uri);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jsonp.cljs$core$IFn$_invoke$arity$1 = jsonp__1;
jsonp.cljs$core$IFn$_invoke$arity$2 = jsonp__2;
return jsonp;
})()
;
blog.utils.reactive.throttle_STAR_ = (function() {
var throttle_STAR_ = null;
var throttle_STAR___2 = (function (in$,msecs){return throttle_STAR_.call(null,in$,msecs,cljs.core.async.chan.call(null));
});
var throttle_STAR___3 = (function (in$,msecs,out){return throttle_STAR_.call(null,in$,msecs,out,cljs.core.async.chan.call(null));
});
var throttle_STAR___4 = (function (in$,msecs,out,control){var c__8560__auto___17510 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_17457){var state_val_17458 = (state_17457[1]);if((state_val_17458 === 1))
{var inst_17368 = [in$,control];var inst_17369 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17368,null));var inst_17370 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_17371 = null;var inst_17372 = inst_17369;var state_17457__$1 = (function (){var statearr_17459 = state_17457;(statearr_17459[7] = inst_17370);
(statearr_17459[8] = inst_17371);
(statearr_17459[9] = inst_17372);
return statearr_17459;
})();var statearr_17460_17511 = state_17457__$1;(statearr_17460_17511[2] = null);
(statearr_17460_17511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 2))
{var inst_17372 = (state_17457[9]);var inst_17375 = cljs.core.nth.call(null,inst_17372,0,null);var inst_17376 = cljs.core.nth.call(null,inst_17372,1,null);var inst_17377 = cljs.core.nth.call(null,inst_17372,2,null);var state_17457__$1 = (function (){var statearr_17461 = state_17457;(statearr_17461[10] = inst_17377);
(statearr_17461[11] = inst_17376);
(statearr_17461[12] = inst_17375);
return statearr_17461;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17457__$1,4,inst_17372);
} else
{if((state_val_17458 === 3))
{var inst_17455 = (state_17457[2]);var state_17457__$1 = state_17457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17457__$1,inst_17455);
} else
{if((state_val_17458 === 4))
{var inst_17382 = (state_17457[13]);var inst_17380 = (state_17457[2]);var inst_17381 = cljs.core.nth.call(null,inst_17380,0,null);var inst_17382__$1 = cljs.core.nth.call(null,inst_17380,1,null);var inst_17386 = cljs.core._EQ_.call(null,in$,inst_17382__$1);var state_17457__$1 = (function (){var statearr_17462 = state_17457;(statearr_17462[14] = inst_17381);
(statearr_17462[13] = inst_17382__$1);
return statearr_17462;
})();if(inst_17386)
{var statearr_17463_17512 = state_17457__$1;(statearr_17463_17512[1] = 5);
} else
{var statearr_17464_17513 = state_17457__$1;(statearr_17464_17513[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 5))
{var inst_17370 = (state_17457[7]);var inst_17391 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324),inst_17370);var state_17457__$1 = state_17457;if(inst_17391)
{var statearr_17465_17514 = state_17457__$1;(statearr_17465_17514[1] = 8);
} else
{var statearr_17466_17515 = state_17457__$1;(statearr_17466_17515[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 6))
{var inst_17382 = (state_17457[13]);var inst_17377 = (state_17457[10]);var inst_17417 = cljs.core._EQ_.call(null,inst_17377,inst_17382);var state_17457__$1 = state_17457;if(inst_17417)
{var statearr_17467_17516 = state_17457__$1;(statearr_17467_17516[1] = 17);
} else
{var statearr_17468_17517 = state_17457__$1;(statearr_17468_17517[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 7))
{var inst_17453 = (state_17457[2]);var state_17457__$1 = state_17457;var statearr_17469_17518 = state_17457__$1;(statearr_17469_17518[2] = inst_17453);
(statearr_17469_17518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 8))
{var inst_17381 = (state_17457[14]);var state_17457__$1 = state_17457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17457__$1,11,out,inst_17381);
} else
{if((state_val_17458 === 9))
{var inst_17370 = (state_17457[7]);var inst_17403 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","throttling","blog.utils.reactive/throttling",3340209363),inst_17370);var state_17457__$1 = state_17457;if(inst_17403)
{var statearr_17470_17519 = state_17457__$1;(statearr_17470_17519[1] = 13);
} else
{var statearr_17471_17520 = state_17457__$1;(statearr_17471_17520[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 10))
{var inst_17415 = (state_17457[2]);var state_17457__$1 = state_17457;var statearr_17473_17521 = state_17457__$1;(statearr_17473_17521[2] = inst_17415);
(statearr_17473_17521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 11))
{var inst_17381 = (state_17457[14]);var inst_17394 = (state_17457[2]);var inst_17395 = [new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890),inst_17381];var inst_17396 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17395,null));var state_17457__$1 = (function (){var statearr_17474 = state_17457;(statearr_17474[15] = inst_17394);
return statearr_17474;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17457__$1,12,out,inst_17396);
} else
{if((state_val_17458 === 12))
{var inst_17371 = (state_17457[8]);var inst_17372 = (state_17457[9]);var inst_17398 = (state_17457[2]);var inst_17399 = cljs.core.async.timeout.call(null,msecs);var inst_17400 = cljs.core.conj.call(null,inst_17372,inst_17399);var tmp17472 = inst_17371;var inst_17370 = new cljs.core.Keyword("blog.utils.reactive","throttling","blog.utils.reactive/throttling",3340209363);var inst_17371__$1 = tmp17472;var inst_17372__$1 = inst_17400;var state_17457__$1 = (function (){var statearr_17475 = state_17457;(statearr_17475[16] = inst_17398);
(statearr_17475[7] = inst_17370);
(statearr_17475[8] = inst_17371__$1);
(statearr_17475[9] = inst_17372__$1);
return statearr_17475;
})();var statearr_17476_17522 = state_17457__$1;(statearr_17476_17522[2] = null);
(statearr_17476_17522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 13))
{var inst_17381 = (state_17457[14]);var state_17457__$1 = state_17457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17457__$1,16,out,inst_17381);
} else
{if((state_val_17458 === 14))
{var inst_17370 = (state_17457[7]);var inst_17409 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_17370)].join('');var inst_17410 = (new Error(inst_17409));var inst_17411 = (function(){throw inst_17410})();var state_17457__$1 = state_17457;var statearr_17479_17523 = state_17457__$1;(statearr_17479_17523[2] = inst_17411);
(statearr_17479_17523[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 15))
{var inst_17413 = (state_17457[2]);var state_17457__$1 = state_17457;var statearr_17480_17524 = state_17457__$1;(statearr_17480_17524[2] = inst_17413);
(statearr_17480_17524[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 16))
{var inst_17381 = (state_17457[14]);var inst_17370 = (state_17457[7]);var inst_17372 = (state_17457[9]);var inst_17406 = (state_17457[2]);var tmp17477 = inst_17370;var tmp17478 = inst_17372;var inst_17370__$1 = tmp17477;var inst_17371 = inst_17381;var inst_17372__$1 = tmp17478;var state_17457__$1 = (function (){var statearr_17481 = state_17457;(statearr_17481[17] = inst_17406);
(statearr_17481[7] = inst_17370__$1);
(statearr_17481[8] = inst_17371);
(statearr_17481[9] = inst_17372__$1);
return statearr_17481;
})();var statearr_17482_17525 = state_17457__$1;(statearr_17482_17525[2] = null);
(statearr_17482_17525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 17))
{var inst_17371 = (state_17457[8]);var state_17457__$1 = state_17457;if(cljs.core.truth_(inst_17371))
{var statearr_17483_17526 = state_17457__$1;(statearr_17483_17526[1] = 20);
} else
{var statearr_17484_17527 = state_17457__$1;(statearr_17484_17527[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 18))
{var inst_17382 = (state_17457[13]);var inst_17434 = cljs.core._EQ_.call(null,control,inst_17382);var state_17457__$1 = state_17457;if(inst_17434)
{var statearr_17485_17528 = state_17457__$1;(statearr_17485_17528[1] = 24);
} else
{var statearr_17486_17529 = state_17457__$1;(statearr_17486_17529[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 19))
{var inst_17451 = (state_17457[2]);var state_17457__$1 = state_17457;var statearr_17488_17530 = state_17457__$1;(statearr_17488_17530[2] = inst_17451);
(statearr_17488_17530[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 20))
{var inst_17371 = (state_17457[8]);var inst_17420 = [new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890),inst_17371];var inst_17421 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17420,null));var state_17457__$1 = state_17457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17457__$1,23,out,inst_17421);
} else
{if((state_val_17458 === 21))
{var inst_17371 = (state_17457[8]);var inst_17372 = (state_17457[9]);var inst_17429 = cljs.core.pop.call(null,inst_17372);var tmp17487 = inst_17371;var inst_17370 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_17371__$1 = tmp17487;var inst_17372__$1 = inst_17429;var state_17457__$1 = (function (){var statearr_17490 = state_17457;(statearr_17490[7] = inst_17370);
(statearr_17490[8] = inst_17371__$1);
(statearr_17490[9] = inst_17372__$1);
return statearr_17490;
})();var statearr_17491_17531 = state_17457__$1;(statearr_17491_17531[2] = null);
(statearr_17491_17531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 22))
{var inst_17432 = (state_17457[2]);var state_17457__$1 = state_17457;var statearr_17492_17532 = state_17457__$1;(statearr_17492_17532[2] = inst_17432);
(statearr_17492_17532[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 23))
{var inst_17370 = (state_17457[7]);var inst_17372 = (state_17457[9]);var inst_17423 = (state_17457[2]);var inst_17424 = cljs.core.pop.call(null,inst_17372);var inst_17425 = cljs.core.async.timeout.call(null,msecs);var inst_17426 = cljs.core.conj.call(null,inst_17424,inst_17425);var tmp17489 = inst_17370;var inst_17370__$1 = tmp17489;var inst_17371 = null;var inst_17372__$1 = inst_17426;var state_17457__$1 = (function (){var statearr_17493 = state_17457;(statearr_17493[7] = inst_17370__$1);
(statearr_17493[8] = inst_17371);
(statearr_17493[9] = inst_17372__$1);
(statearr_17493[18] = inst_17423);
return statearr_17493;
})();var statearr_17494_17533 = state_17457__$1;(statearr_17494_17533[2] = null);
(statearr_17494_17533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 24))
{var inst_17372 = (state_17457[9]);var inst_17436 = cljs.core.count.call(null,inst_17372);var inst_17437 = cljs.core._EQ_.call(null,inst_17436,3);var state_17457__$1 = state_17457;if(inst_17437)
{var statearr_17495_17534 = state_17457__$1;(statearr_17495_17534[1] = 27);
} else
{var statearr_17496_17535 = state_17457__$1;(statearr_17496_17535[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 25))
{var inst_17382 = (state_17457[13]);var inst_17445 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_17382)].join('');var inst_17446 = (new Error(inst_17445));var inst_17447 = (function(){throw inst_17446})();var state_17457__$1 = state_17457;var statearr_17497_17536 = state_17457__$1;(statearr_17497_17536[2] = inst_17447);
(statearr_17497_17536[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 26))
{var inst_17449 = (state_17457[2]);var state_17457__$1 = state_17457;var statearr_17498_17537 = state_17457__$1;(statearr_17498_17537[2] = inst_17449);
(statearr_17498_17537[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 27))
{var inst_17372 = (state_17457[9]);var inst_17439 = cljs.core.pop.call(null,inst_17372);var state_17457__$1 = state_17457;var statearr_17499_17538 = state_17457__$1;(statearr_17499_17538[2] = inst_17439);
(statearr_17499_17538[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 28))
{var inst_17372 = (state_17457[9]);var state_17457__$1 = state_17457;var statearr_17500_17539 = state_17457__$1;(statearr_17500_17539[2] = inst_17372);
(statearr_17500_17539[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17458 === 29))
{var inst_17442 = (state_17457[2]);var inst_17370 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_17371 = null;var inst_17372 = inst_17442;var state_17457__$1 = (function (){var statearr_17501 = state_17457;(statearr_17501[7] = inst_17370);
(statearr_17501[8] = inst_17371);
(statearr_17501[9] = inst_17372);
return statearr_17501;
})();var statearr_17502_17540 = state_17457__$1;(statearr_17502_17540[2] = null);
(statearr_17502_17540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_17506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17506[0] = state_machine__8407__auto__);
(statearr_17506[1] = 1);
return statearr_17506;
});
var state_machine__8407__auto____1 = (function (state_17457){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_17457);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e17507){if((e17507 instanceof Object))
{var ex__8410__auto__ = e17507;var statearr_17508_17541 = state_17457;(statearr_17508_17541[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17542 = state_17457;
state_17457 = G__17542;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_17457){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_17457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_17509 = f__8561__auto__.call(null);(statearr_17509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___17510);
return statearr_17509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
throttle_STAR_ = function(in$,msecs,out,control){
switch(arguments.length){
case 2:
return throttle_STAR___2.call(this,in$,msecs);
case 3:
return throttle_STAR___3.call(this,in$,msecs,out);
case 4:
return throttle_STAR___4.call(this,in$,msecs,out,control);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle_STAR_.cljs$core$IFn$_invoke$arity$2 = throttle_STAR___2;
throttle_STAR_.cljs$core$IFn$_invoke$arity$3 = throttle_STAR___3;
throttle_STAR_.cljs$core$IFn$_invoke$arity$4 = throttle_STAR___4;
return throttle_STAR_;
})()
;
blog.utils.reactive.throttle_msg_QMARK_ = (function throttle_msg_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890)));
});
blog.utils.reactive.throttle = (function() {
var throttle = null;
var throttle__2 = (function (in$,msecs){return throttle.call(null,in$,msecs,cljs.core.async.chan.call(null));
});
var throttle__3 = (function (in$,msecs,out){return blog.utils.reactive.map.call(null,cljs.core.second,blog.utils.reactive.filter.call(null,(function (p1__17543_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__17543_SHARP_)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__17543_SHARP_),new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890)));
}),blog.utils.reactive.throttle_STAR_.call(null,in$,msecs,out)));
});
throttle = function(in$,msecs,out){
switch(arguments.length){
case 2:
return throttle__2.call(this,in$,msecs);
case 3:
return throttle__3.call(this,in$,msecs,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle.cljs$core$IFn$_invoke$arity$2 = throttle__2;
throttle.cljs$core$IFn$_invoke$arity$3 = throttle__3;
return throttle;
})()
;
blog.utils.reactive.debounce = (function() {
var debounce = null;
var debounce__2 = (function (source,msecs){return debounce.call(null,cljs.core.async.chan.call(null),source,msecs);
});
var debounce__3 = (function (out,source,msecs){var c__8560__auto___17730 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_17696){var state_val_17697 = (state_17696[1]);if((state_val_17697 === 1))
{var inst_17637 = [source];var inst_17638 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17637,null));var inst_17639 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_17640 = inst_17638;var state_17696__$1 = (function (){var statearr_17698 = state_17696;(statearr_17698[7] = inst_17639);
(statearr_17698[8] = inst_17640);
return statearr_17698;
})();var statearr_17699_17731 = state_17696__$1;(statearr_17699_17731[2] = null);
(statearr_17699_17731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 2))
{var inst_17640 = (state_17696[8]);var inst_17643 = cljs.core.nth.call(null,inst_17640,0,null);var inst_17644 = cljs.core.nth.call(null,inst_17640,1,null);var state_17696__$1 = (function (){var statearr_17700 = state_17696;(statearr_17700[9] = inst_17643);
(statearr_17700[10] = inst_17644);
return statearr_17700;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17696__$1,4,inst_17640);
} else
{if((state_val_17697 === 3))
{var inst_17694 = (state_17696[2]);var state_17696__$1 = state_17696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17696__$1,inst_17694);
} else
{if((state_val_17697 === 4))
{var inst_17649 = (state_17696[11]);var inst_17647 = (state_17696[2]);var inst_17648 = cljs.core.nth.call(null,inst_17647,0,null);var inst_17649__$1 = cljs.core.nth.call(null,inst_17647,1,null);var inst_17653 = cljs.core._EQ_.call(null,source,inst_17649__$1);var state_17696__$1 = (function (){var statearr_17701 = state_17696;(statearr_17701[12] = inst_17648);
(statearr_17701[11] = inst_17649__$1);
return statearr_17701;
})();if(inst_17653)
{var statearr_17702_17732 = state_17696__$1;(statearr_17702_17732[1] = 5);
} else
{var statearr_17703_17733 = state_17696__$1;(statearr_17703_17733[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 5))
{var inst_17639 = (state_17696[7]);var inst_17658 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324),inst_17639);var state_17696__$1 = state_17696;if(inst_17658)
{var statearr_17704_17734 = state_17696__$1;(statearr_17704_17734[1] = 8);
} else
{var statearr_17705_17735 = state_17696__$1;(statearr_17705_17735[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 6))
{var inst_17644 = (state_17696[10]);var inst_17649 = (state_17696[11]);var inst_17681 = cljs.core._EQ_.call(null,inst_17644,inst_17649);var state_17696__$1 = state_17696;if(inst_17681)
{var statearr_17706_17736 = state_17696__$1;(statearr_17706_17736[1] = 15);
} else
{var statearr_17707_17737 = state_17696__$1;(statearr_17707_17737[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 7))
{var inst_17692 = (state_17696[2]);var state_17696__$1 = state_17696;var statearr_17708_17738 = state_17696__$1;(statearr_17708_17738[2] = inst_17692);
(statearr_17708_17738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 8))
{var inst_17648 = (state_17696[12]);var state_17696__$1 = state_17696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17696__$1,11,out,inst_17648);
} else
{if((state_val_17697 === 9))
{var inst_17639 = (state_17696[7]);var inst_17666 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","debouncing","blog.utils.reactive/debouncing",1220316782),inst_17639);var state_17696__$1 = state_17696;if(inst_17666)
{var statearr_17709_17739 = state_17696__$1;(statearr_17709_17739[1] = 12);
} else
{var statearr_17710_17740 = state_17696__$1;(statearr_17710_17740[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 10))
{var inst_17679 = (state_17696[2]);var state_17696__$1 = state_17696;var statearr_17712_17741 = state_17696__$1;(statearr_17712_17741[2] = inst_17679);
(statearr_17712_17741[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 11))
{var inst_17640 = (state_17696[8]);var inst_17661 = (state_17696[2]);var inst_17662 = cljs.core.async.timeout.call(null,msecs);var inst_17663 = cljs.core.conj.call(null,inst_17640,inst_17662);var inst_17639 = new cljs.core.Keyword("blog.utils.reactive","debouncing","blog.utils.reactive/debouncing",1220316782);var inst_17640__$1 = inst_17663;var state_17696__$1 = (function (){var statearr_17713 = state_17696;(statearr_17713[7] = inst_17639);
(statearr_17713[8] = inst_17640__$1);
(statearr_17713[13] = inst_17661);
return statearr_17713;
})();var statearr_17714_17742 = state_17696__$1;(statearr_17714_17742[2] = null);
(statearr_17714_17742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 12))
{var inst_17639 = (state_17696[7]);var inst_17640 = (state_17696[8]);var inst_17668 = cljs.core.pop.call(null,inst_17640);var inst_17669 = cljs.core.async.timeout.call(null,msecs);var inst_17670 = cljs.core.conj.call(null,inst_17668,inst_17669);var tmp17711 = inst_17639;var inst_17639__$1 = tmp17711;var inst_17640__$1 = inst_17670;var state_17696__$1 = (function (){var statearr_17715 = state_17696;(statearr_17715[7] = inst_17639__$1);
(statearr_17715[8] = inst_17640__$1);
return statearr_17715;
})();var statearr_17716_17743 = state_17696__$1;(statearr_17716_17743[2] = null);
(statearr_17716_17743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 13))
{var inst_17639 = (state_17696[7]);var inst_17673 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_17639)].join('');var inst_17674 = (new Error(inst_17673));var inst_17675 = (function(){throw inst_17674})();var state_17696__$1 = state_17696;var statearr_17717_17744 = state_17696__$1;(statearr_17717_17744[2] = inst_17675);
(statearr_17717_17744[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 14))
{var inst_17677 = (state_17696[2]);var state_17696__$1 = state_17696;var statearr_17718_17745 = state_17696__$1;(statearr_17718_17745[2] = inst_17677);
(statearr_17718_17745[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 15))
{var inst_17640 = (state_17696[8]);var inst_17683 = cljs.core.pop.call(null,inst_17640);var inst_17639 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_17640__$1 = inst_17683;var state_17696__$1 = (function (){var statearr_17719 = state_17696;(statearr_17719[7] = inst_17639);
(statearr_17719[8] = inst_17640__$1);
return statearr_17719;
})();var statearr_17720_17746 = state_17696__$1;(statearr_17720_17746[2] = null);
(statearr_17720_17746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 16))
{var inst_17649 = (state_17696[11]);var inst_17686 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_17649)].join('');var inst_17687 = (new Error(inst_17686));var inst_17688 = (function(){throw inst_17687})();var state_17696__$1 = state_17696;var statearr_17721_17747 = state_17696__$1;(statearr_17721_17747[2] = inst_17688);
(statearr_17721_17747[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17697 === 17))
{var inst_17690 = (state_17696[2]);var state_17696__$1 = state_17696;var statearr_17722_17748 = state_17696__$1;(statearr_17722_17748[2] = inst_17690);
(statearr_17722_17748[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_17726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17726[0] = state_machine__8407__auto__);
(statearr_17726[1] = 1);
return statearr_17726;
});
var state_machine__8407__auto____1 = (function (state_17696){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_17696);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e17727){if((e17727 instanceof Object))
{var ex__8410__auto__ = e17727;var statearr_17728_17749 = state_17696;(statearr_17728_17749[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17750 = state_17696;
state_17696 = G__17750;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_17696){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_17696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_17729 = f__8561__auto__.call(null);(statearr_17729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___17730);
return statearr_17729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
debounce = function(out,source,msecs){
switch(arguments.length){
case 2:
return debounce__2.call(this,out,source);
case 3:
return debounce__3.call(this,out,source,msecs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
debounce.cljs$core$IFn$_invoke$arity$2 = debounce__2;
debounce.cljs$core$IFn$_invoke$arity$3 = debounce__3;
return debounce;
})()
;
/**
* @param {...*} var_args
*/
blog.utils.reactive.run_task = (function() { 
var run_task__delegate = function (f,args){var out = cljs.core.async.chan.call(null);var cb = ((function (out){
return (function() { 
var G__17799__delegate = function (err,results){var c__8560__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__8560__auto__,out){
return (function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = ((function (c__8560__auto__,out){
return (function (state_17785){var state_val_17786 = (state_17785[1]);if((state_val_17786 === 6))
{var inst_17780 = (state_17785[2]);var state_17785__$1 = state_17785;var statearr_17787_17800 = state_17785__$1;(statearr_17787_17800[2] = inst_17780);
(statearr_17787_17800[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17786 === 5))
{var inst_17777 = (state_17785[2]);var state_17785__$1 = state_17785;var statearr_17788_17801 = state_17785__$1;(statearr_17788_17801[2] = inst_17777);
(statearr_17788_17801[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17786 === 4))
{var inst_17782 = (state_17785[2]);var inst_17783 = cljs.core.async.close_BANG_.call(null,out);var state_17785__$1 = (function (){var statearr_17789 = state_17785;(statearr_17789[7] = inst_17782);
return statearr_17789;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17785__$1,inst_17783);
} else
{if((state_val_17786 === 3))
{var state_17785__$1 = state_17785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17785__$1,6,out,results);
} else
{if((state_val_17786 === 2))
{var state_17785__$1 = state_17785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17785__$1,5,out,err);
} else
{if((state_val_17786 === 1))
{var state_17785__$1 = state_17785;if(cljs.core.truth_(err))
{var statearr_17790_17802 = state_17785__$1;(statearr_17790_17802[1] = 2);
} else
{var statearr_17791_17803 = state_17785__$1;(statearr_17791_17803[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
});})(c__8560__auto__,out))
;return ((function (switch__8406__auto__,c__8560__auto__,out){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_17795 = [null,null,null,null,null,null,null,null];(statearr_17795[0] = state_machine__8407__auto__);
(statearr_17795[1] = 1);
return statearr_17795;
});
var state_machine__8407__auto____1 = (function (state_17785){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_17785);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e17796){if((e17796 instanceof Object))
{var ex__8410__auto__ = e17796;var statearr_17797_17804 = state_17785;(statearr_17797_17804[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17805 = state_17785;
state_17785 = G__17805;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_17785){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_17785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__,c__8560__auto__,out))
})();var state__8562__auto__ = (function (){var statearr_17798 = f__8561__auto__.call(null);(statearr_17798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto__);
return statearr_17798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
});})(c__8560__auto__,out))
);
return c__8560__auto__;
};
var G__17799 = function (err,var_args){
var results = null;if (arguments.length > 1) {
  results = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__17799__delegate.call(this,err,results);};
G__17799.cljs$lang$maxFixedArity = 1;
G__17799.cljs$lang$applyTo = (function (arglist__17806){
var err = cljs.core.first(arglist__17806);
var results = cljs.core.rest(arglist__17806);
return G__17799__delegate(err,results);
});
G__17799.cljs$core$IFn$_invoke$arity$variadic = G__17799__delegate;
return G__17799;
})()
;})(out))
;cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb], null)));
return out;
};
var run_task = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return run_task__delegate.call(this,f,args);};
run_task.cljs$lang$maxFixedArity = 1;
run_task.cljs$lang$applyTo = (function (arglist__17807){
var f = cljs.core.first(arglist__17807);
var args = cljs.core.rest(arglist__17807);
return run_task__delegate(f,args);
});
run_task.cljs$core$IFn$_invoke$arity$variadic = run_task__delegate;
return run_task;
})()
;
/**
* @param {...*} var_args
*/
blog.utils.reactive.task = (function() { 
var task__delegate = function (args){return (function (){return cljs.core.apply.call(null,blog.utils.reactive.run_task,args);
});
};
var task = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return task__delegate.call(this,args);};
task.cljs$lang$maxFixedArity = 0;
task.cljs$lang$applyTo = (function (arglist__17808){
var args = cljs.core.seq(arglist__17808);
return task__delegate(args);
});
task.cljs$core$IFn$_invoke$arity$variadic = task__delegate;
return task;
})()
;
