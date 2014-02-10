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
blog.utils.reactive.log = (function log(in$){var out = cljs.core.async.chan.call(null);var chan__3315__auto___10859 = in$;var c__5546__auto___10860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_10841){var state_val_10842 = (state_10841[1]);if((state_val_10842 === 8))
{var inst_10833 = (state_10841[2]);var state_10841__$1 = (function (){var statearr_10843 = state_10841;(statearr_10843[7] = inst_10833);
return statearr_10843;
})();var statearr_10844_10861 = state_10841__$1;(statearr_10844_10861[2] = null);
(statearr_10844_10861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10842 === 7))
{var inst_10837 = (state_10841[2]);var state_10841__$1 = state_10841;var statearr_10845_10862 = state_10841__$1;(statearr_10845_10862[2] = inst_10837);
(statearr_10845_10862[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10842 === 6))
{var state_10841__$1 = state_10841;var statearr_10846_10863 = state_10841__$1;(statearr_10846_10863[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_10846_10863[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10842 === 5))
{var inst_10829 = (state_10841[8]);var inst_10831 = console.log(inst_10829);var state_10841__$1 = (function (){var statearr_10847 = state_10841;(statearr_10847[9] = inst_10831);
return statearr_10847;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10841__$1,8,out,inst_10829);
} else
{if((state_val_10842 === 4))
{var inst_10829 = (state_10841[8]);var inst_10829__$1 = (state_10841[2]);var state_10841__$1 = (function (){var statearr_10848 = state_10841;(statearr_10848[8] = inst_10829__$1);
return statearr_10848;
})();if(cljs.core.truth_(inst_10829__$1))
{var statearr_10849_10864 = state_10841__$1;(statearr_10849_10864[1] = 5);
} else
{var statearr_10850_10865 = state_10841__$1;(statearr_10850_10865[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10842 === 3))
{var inst_10839 = (state_10841[2]);var state_10841__$1 = state_10841;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10841__$1,inst_10839);
} else
{if((state_val_10842 === 2))
{var state_10841__$1 = state_10841;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10841__$1,4,chan__3315__auto___10859);
} else
{if((state_val_10842 === 1))
{var state_10841__$1 = state_10841;var statearr_10851_10866 = state_10841__$1;(statearr_10851_10866[2] = null);
(statearr_10851_10866[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_10855 = [null,null,null,null,null,null,null,null,null,null];(statearr_10855[0] = state_machine__5532__auto__);
(statearr_10855[1] = 1);
return statearr_10855;
});
var state_machine__5532__auto____1 = (function (state_10841){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_10841);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e10856){if((e10856 instanceof Object))
{var ex__5535__auto__ = e10856;var statearr_10857_10867 = state_10841;(statearr_10857_10867[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10841);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10868 = state_10841;
state_10841 = G__10868;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_10841){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_10841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_10858 = f__5547__auto__.call(null);(statearr_10858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___10860);
return statearr_10858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
blog.utils.reactive.map = (function map(f,in$){var out = cljs.core.async.chan.call(null);var c__5546__auto___10933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_10916){var state_val_10917 = (state_10916[1]);if((state_val_10917 === 8))
{var inst_10907 = (state_10916[2]);var state_10916__$1 = (function (){var statearr_10918 = state_10916;(statearr_10918[7] = inst_10907);
return statearr_10918;
})();var statearr_10919_10934 = state_10916__$1;(statearr_10919_10934[2] = null);
(statearr_10919_10934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 7))
{var inst_10912 = (state_10916[2]);var state_10916__$1 = state_10916;var statearr_10920_10935 = state_10916__$1;(statearr_10920_10935[2] = inst_10912);
(statearr_10920_10935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 6))
{var inst_10910 = cljs.core.async.close_BANG_.call(null,out);var state_10916__$1 = state_10916;var statearr_10921_10936 = state_10916__$1;(statearr_10921_10936[2] = inst_10910);
(statearr_10921_10936[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 5))
{var inst_10903 = (state_10916[8]);var inst_10905 = f.call(null,inst_10903);var state_10916__$1 = state_10916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10916__$1,8,out,inst_10905);
} else
{if((state_val_10917 === 4))
{var inst_10903 = (state_10916[8]);var inst_10903__$1 = (state_10916[2]);var state_10916__$1 = (function (){var statearr_10922 = state_10916;(statearr_10922[8] = inst_10903__$1);
return statearr_10922;
})();if(cljs.core.truth_(inst_10903__$1))
{var statearr_10923_10937 = state_10916__$1;(statearr_10923_10937[1] = 5);
} else
{var statearr_10924_10938 = state_10916__$1;(statearr_10924_10938[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 3))
{var inst_10914 = (state_10916[2]);var state_10916__$1 = state_10916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10916__$1,inst_10914);
} else
{if((state_val_10917 === 2))
{var state_10916__$1 = state_10916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10916__$1,4,in$);
} else
{if((state_val_10917 === 1))
{var state_10916__$1 = state_10916;var statearr_10925_10939 = state_10916__$1;(statearr_10925_10939[2] = null);
(statearr_10925_10939[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_10929 = [null,null,null,null,null,null,null,null,null];(statearr_10929[0] = state_machine__5532__auto__);
(statearr_10929[1] = 1);
return statearr_10929;
});
var state_machine__5532__auto____1 = (function (state_10916){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_10916);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e10930){if((e10930 instanceof Object))
{var ex__5535__auto__ = e10930;var statearr_10931_10940 = state_10916;(statearr_10931_10940[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10916);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10941 = state_10916;
state_10916 = G__10941;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_10916){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_10916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_10932 = f__5547__auto__.call(null);(statearr_10932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___10933);
return statearr_10932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.filter = (function filter(pred,in$){var out = cljs.core.async.chan.call(null);var c__5546__auto___11022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11001){var state_val_11002 = (state_11001[1]);if((state_val_11002 === 1))
{var state_11001__$1 = state_11001;var statearr_11003_11023 = state_11001__$1;(statearr_11003_11023[2] = null);
(statearr_11003_11023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 2))
{var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11001__$1,4,in$);
} else
{if((state_val_11002 === 3))
{var inst_10999 = (state_11001[2]);var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11001__$1,inst_10999);
} else
{if((state_val_11002 === 4))
{var inst_10984 = (state_11001[7]);var inst_10984__$1 = (state_11001[2]);var state_11001__$1 = (function (){var statearr_11004 = state_11001;(statearr_11004[7] = inst_10984__$1);
return statearr_11004;
})();if(cljs.core.truth_(inst_10984__$1))
{var statearr_11005_11024 = state_11001__$1;(statearr_11005_11024[1] = 5);
} else
{var statearr_11006_11025 = state_11001__$1;(statearr_11006_11025[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 5))
{var inst_10984 = (state_11001[7]);var inst_10986 = pred.call(null,inst_10984);var state_11001__$1 = state_11001;if(cljs.core.truth_(inst_10986))
{var statearr_11007_11026 = state_11001__$1;(statearr_11007_11026[1] = 8);
} else
{var statearr_11008_11027 = state_11001__$1;(statearr_11008_11027[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 6))
{var inst_10995 = cljs.core.async.close_BANG_.call(null,out);var state_11001__$1 = state_11001;var statearr_11009_11028 = state_11001__$1;(statearr_11009_11028[2] = inst_10995);
(statearr_11009_11028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 7))
{var inst_10997 = (state_11001[2]);var state_11001__$1 = state_11001;var statearr_11010_11029 = state_11001__$1;(statearr_11010_11029[2] = inst_10997);
(statearr_11010_11029[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 8))
{var inst_10984 = (state_11001[7]);var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11001__$1,11,out,inst_10984);
} else
{if((state_val_11002 === 9))
{var state_11001__$1 = state_11001;var statearr_11011_11030 = state_11001__$1;(statearr_11011_11030[2] = null);
(statearr_11011_11030[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 10))
{var inst_10992 = (state_11001[2]);var state_11001__$1 = (function (){var statearr_11012 = state_11001;(statearr_11012[8] = inst_10992);
return statearr_11012;
})();var statearr_11013_11031 = state_11001__$1;(statearr_11013_11031[2] = null);
(statearr_11013_11031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 11))
{var inst_10989 = (state_11001[2]);var state_11001__$1 = state_11001;var statearr_11014_11032 = state_11001__$1;(statearr_11014_11032[2] = inst_10989);
(statearr_11014_11032[1] = 10);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11018 = [null,null,null,null,null,null,null,null,null];(statearr_11018[0] = state_machine__5532__auto__);
(statearr_11018[1] = 1);
return statearr_11018;
});
var state_machine__5532__auto____1 = (function (state_11001){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11001);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11019){if((e11019 instanceof Object))
{var ex__5535__auto__ = e11019;var statearr_11020_11033 = state_11001;(statearr_11020_11033[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11001);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11034 = state_11001;
state_11001 = G__11034;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11001){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11021 = f__5547__auto__.call(null);(statearr_11021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11022);
return statearr_11021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.remove = (function remove(f,in$){var out = cljs.core.async.chan.call(null);var c__5546__auto___11115 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11094){var state_val_11095 = (state_11094[1]);if((state_val_11095 === 1))
{var state_11094__$1 = state_11094;var statearr_11096_11116 = state_11094__$1;(statearr_11096_11116[2] = null);
(statearr_11096_11116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 2))
{var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11094__$1,4,in$);
} else
{if((state_val_11095 === 3))
{var inst_11092 = (state_11094[2]);var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11094__$1,inst_11092);
} else
{if((state_val_11095 === 4))
{var inst_11077 = (state_11094[7]);var inst_11077__$1 = (state_11094[2]);var state_11094__$1 = (function (){var statearr_11097 = state_11094;(statearr_11097[7] = inst_11077__$1);
return statearr_11097;
})();if(cljs.core.truth_(inst_11077__$1))
{var statearr_11098_11117 = state_11094__$1;(statearr_11098_11117[1] = 5);
} else
{var statearr_11099_11118 = state_11094__$1;(statearr_11099_11118[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 5))
{var inst_11077 = (state_11094[7]);var inst_11079 = f.call(null,inst_11077);var state_11094__$1 = state_11094;if(cljs.core.truth_(inst_11079))
{var statearr_11100_11119 = state_11094__$1;(statearr_11100_11119[1] = 8);
} else
{var statearr_11101_11120 = state_11094__$1;(statearr_11101_11120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 6))
{var inst_11088 = cljs.core.async.close_BANG_.call(null,out);var state_11094__$1 = state_11094;var statearr_11102_11121 = state_11094__$1;(statearr_11102_11121[2] = inst_11088);
(statearr_11102_11121[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 7))
{var inst_11090 = (state_11094[2]);var state_11094__$1 = state_11094;var statearr_11103_11122 = state_11094__$1;(statearr_11103_11122[2] = inst_11090);
(statearr_11103_11122[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 8))
{var state_11094__$1 = state_11094;var statearr_11104_11123 = state_11094__$1;(statearr_11104_11123[2] = null);
(statearr_11104_11123[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 9))
{var inst_11077 = (state_11094[7]);var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11094__$1,11,out,inst_11077);
} else
{if((state_val_11095 === 10))
{var inst_11085 = (state_11094[2]);var state_11094__$1 = (function (){var statearr_11105 = state_11094;(statearr_11105[8] = inst_11085);
return statearr_11105;
})();var statearr_11106_11124 = state_11094__$1;(statearr_11106_11124[2] = null);
(statearr_11106_11124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 11))
{var inst_11083 = (state_11094[2]);var state_11094__$1 = state_11094;var statearr_11107_11125 = state_11094__$1;(statearr_11107_11125[2] = inst_11083);
(statearr_11107_11125[1] = 10);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11111 = [null,null,null,null,null,null,null,null,null];(statearr_11111[0] = state_machine__5532__auto__);
(statearr_11111[1] = 1);
return statearr_11111;
});
var state_machine__5532__auto____1 = (function (state_11094){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11094);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11112){if((e11112 instanceof Object))
{var ex__5535__auto__ = e11112;var statearr_11113_11126 = state_11094;(statearr_11113_11126[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11127 = state_11094;
state_11094 = G__11127;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11094){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11114 = f__5547__auto__.call(null);(statearr_11114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11115);
return statearr_11114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.spool = (function spool(xs){var out = cljs.core.async.chan.call(null);var c__5546__auto___11194 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11177){var state_val_11178 = (state_11177[1]);if((state_val_11178 === 7))
{var inst_11162 = (state_11177[7]);var inst_11167 = (state_11177[2]);var inst_11168 = cljs.core.next.call(null,inst_11162);var inst_11162__$1 = inst_11168;var state_11177__$1 = (function (){var statearr_11179 = state_11177;(statearr_11179[8] = inst_11167);
(statearr_11179[7] = inst_11162__$1);
return statearr_11179;
})();var statearr_11180_11195 = state_11177__$1;(statearr_11180_11195[2] = null);
(statearr_11180_11195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11178 === 6))
{var inst_11173 = (state_11177[2]);var state_11177__$1 = state_11177;var statearr_11181_11196 = state_11177__$1;(statearr_11181_11196[2] = inst_11173);
(statearr_11181_11196[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11178 === 5))
{var inst_11171 = cljs.core.async.close_BANG_.call(null,out);var state_11177__$1 = state_11177;var statearr_11182_11197 = state_11177__$1;(statearr_11182_11197[2] = inst_11171);
(statearr_11182_11197[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11178 === 4))
{var inst_11162 = (state_11177[7]);var inst_11165 = cljs.core.first.call(null,inst_11162);var state_11177__$1 = state_11177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11177__$1,7,out,inst_11165);
} else
{if((state_val_11178 === 3))
{var inst_11175 = (state_11177[2]);var state_11177__$1 = state_11177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11177__$1,inst_11175);
} else
{if((state_val_11178 === 2))
{var inst_11162 = (state_11177[7]);var state_11177__$1 = state_11177;if(cljs.core.truth_(inst_11162))
{var statearr_11183_11198 = state_11177__$1;(statearr_11183_11198[1] = 4);
} else
{var statearr_11184_11199 = state_11177__$1;(statearr_11184_11199[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11178 === 1))
{var inst_11161 = cljs.core.seq.call(null,xs);var inst_11162 = inst_11161;var state_11177__$1 = (function (){var statearr_11185 = state_11177;(statearr_11185[7] = inst_11162);
return statearr_11185;
})();var statearr_11186_11200 = state_11177__$1;(statearr_11186_11200[2] = null);
(statearr_11186_11200[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11190 = [null,null,null,null,null,null,null,null,null];(statearr_11190[0] = state_machine__5532__auto__);
(statearr_11190[1] = 1);
return statearr_11190;
});
var state_machine__5532__auto____1 = (function (state_11177){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11177);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11191){if((e11191 instanceof Object))
{var ex__5535__auto__ = e11191;var statearr_11192_11201 = state_11177;(statearr_11192_11201[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11202 = state_11177;
state_11177 = G__11202;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11177){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11193 = f__5547__auto__.call(null);(statearr_11193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11194);
return statearr_11193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.split = (function() {
var split = null;
var split__2 = (function (pred,in$){return split.call(null,pred,in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null),cljs.core.async.chan.call(null)], null));
});
var split__3 = (function (pred,in$,p__11203){var vec__11248 = p__11203;var out1 = cljs.core.nth.call(null,vec__11248,0,null);var out2 = cljs.core.nth.call(null,vec__11248,1,null);var c__5546__auto___11292 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11270){var state_val_11271 = (state_11270[1]);if((state_val_11271 === 1))
{var state_11270__$1 = state_11270;var statearr_11272_11293 = state_11270__$1;(statearr_11272_11293[2] = null);
(statearr_11272_11293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11271 === 2))
{var state_11270__$1 = state_11270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11270__$1,4,in$);
} else
{if((state_val_11271 === 3))
{var inst_11268 = (state_11270[2]);var state_11270__$1 = state_11270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11270__$1,inst_11268);
} else
{if((state_val_11271 === 4))
{var inst_11251 = (state_11270[7]);var inst_11251__$1 = (state_11270[2]);var state_11270__$1 = (function (){var statearr_11273 = state_11270;(statearr_11273[7] = inst_11251__$1);
return statearr_11273;
})();if(cljs.core.truth_(inst_11251__$1))
{var statearr_11274_11294 = state_11270__$1;(statearr_11274_11294[1] = 5);
} else
{var statearr_11275_11295 = state_11270__$1;(statearr_11275_11295[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11271 === 5))
{var inst_11251 = (state_11270[7]);var inst_11253 = pred.call(null,inst_11251);var state_11270__$1 = state_11270;if(cljs.core.truth_(inst_11253))
{var statearr_11276_11296 = state_11270__$1;(statearr_11276_11296[1] = 8);
} else
{var statearr_11277_11297 = state_11270__$1;(statearr_11277_11297[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11271 === 6))
{var state_11270__$1 = state_11270;var statearr_11278_11298 = state_11270__$1;(statearr_11278_11298[2] = null);
(statearr_11278_11298[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11271 === 7))
{var inst_11266 = (state_11270[2]);var state_11270__$1 = state_11270;var statearr_11279_11299 = state_11270__$1;(statearr_11279_11299[2] = inst_11266);
(statearr_11279_11299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11271 === 8))
{var inst_11251 = (state_11270[7]);var state_11270__$1 = state_11270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11270__$1,11,out1,inst_11251);
} else
{if((state_val_11271 === 9))
{var inst_11251 = (state_11270[7]);var state_11270__$1 = state_11270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11270__$1,12,out2,inst_11251);
} else
{if((state_val_11271 === 10))
{var inst_11263 = (state_11270[2]);var state_11270__$1 = state_11270;var statearr_11280_11300 = state_11270__$1;(statearr_11280_11300[2] = inst_11263);
(statearr_11280_11300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11271 === 11))
{var inst_11256 = (state_11270[2]);var state_11270__$1 = (function (){var statearr_11281 = state_11270;(statearr_11281[8] = inst_11256);
return statearr_11281;
})();var statearr_11282_11301 = state_11270__$1;(statearr_11282_11301[2] = null);
(statearr_11282_11301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11271 === 12))
{var inst_11260 = (state_11270[2]);var state_11270__$1 = (function (){var statearr_11283 = state_11270;(statearr_11283[9] = inst_11260);
return statearr_11283;
})();var statearr_11284_11302 = state_11270__$1;(statearr_11284_11302[2] = null);
(statearr_11284_11302[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11288 = [null,null,null,null,null,null,null,null,null,null];(statearr_11288[0] = state_machine__5532__auto__);
(statearr_11288[1] = 1);
return statearr_11288;
});
var state_machine__5532__auto____1 = (function (state_11270){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11270);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11289){if((e11289 instanceof Object))
{var ex__5535__auto__ = e11289;var statearr_11290_11303 = state_11270;(statearr_11290_11303[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11304 = state_11270;
state_11270 = G__11304;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11270){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11291 = f__5547__auto__.call(null);(statearr_11291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11292);
return statearr_11291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out1,out2], null);
});
split = function(pred,in$,p__11203){
switch(arguments.length){
case 2:
return split__2.call(this,pred,in$);
case 3:
return split__3.call(this,pred,in$,p__11203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
blog.utils.reactive.concat = (function concat(xs,in$){var out = cljs.core.async.chan.call(null);var c__5546__auto___11403 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11379){var state_val_11380 = (state_11379[1]);if((state_val_11380 === 1))
{var inst_11354 = cljs.core.seq.call(null,xs);var inst_11355 = inst_11354;var state_11379__$1 = (function (){var statearr_11381 = state_11379;(statearr_11381[7] = inst_11355);
return statearr_11381;
})();var statearr_11382_11404 = state_11379__$1;(statearr_11382_11404[2] = null);
(statearr_11382_11404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11380 === 2))
{var inst_11355 = (state_11379[7]);var state_11379__$1 = state_11379;if(cljs.core.truth_(inst_11355))
{var statearr_11383_11405 = state_11379__$1;(statearr_11383_11405[1] = 4);
} else
{var statearr_11384_11406 = state_11379__$1;(statearr_11384_11406[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11380 === 3))
{var inst_11377 = (state_11379[2]);var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11379__$1,inst_11377);
} else
{if((state_val_11380 === 4))
{var inst_11355 = (state_11379[7]);var inst_11358 = cljs.core.first.call(null,inst_11355);var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11379__$1,7,out,inst_11358);
} else
{if((state_val_11380 === 5))
{var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11379__$1,8,in$);
} else
{if((state_val_11380 === 6))
{var inst_11375 = (state_11379[2]);var state_11379__$1 = state_11379;var statearr_11385_11407 = state_11379__$1;(statearr_11385_11407[2] = inst_11375);
(statearr_11385_11407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11380 === 7))
{var inst_11355 = (state_11379[7]);var inst_11360 = (state_11379[2]);var inst_11361 = cljs.core.next.call(null,inst_11355);var inst_11355__$1 = inst_11361;var state_11379__$1 = (function (){var statearr_11386 = state_11379;(statearr_11386[8] = inst_11360);
(statearr_11386[7] = inst_11355__$1);
return statearr_11386;
})();var statearr_11387_11408 = state_11379__$1;(statearr_11387_11408[2] = null);
(statearr_11387_11408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11380 === 8))
{var inst_11365 = (state_11379[9]);var inst_11365__$1 = (state_11379[2]);var state_11379__$1 = (function (){var statearr_11388 = state_11379;(statearr_11388[9] = inst_11365__$1);
return statearr_11388;
})();if(cljs.core.truth_(inst_11365__$1))
{var statearr_11389_11409 = state_11379__$1;(statearr_11389_11409[1] = 9);
} else
{var statearr_11390_11410 = state_11379__$1;(statearr_11390_11410[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11380 === 9))
{var inst_11365 = (state_11379[9]);var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11379__$1,12,out,inst_11365);
} else
{if((state_val_11380 === 10))
{var inst_11371 = cljs.core.async.close_BANG_.call(null,out);var state_11379__$1 = state_11379;var statearr_11392_11411 = state_11379__$1;(statearr_11392_11411[2] = inst_11371);
(statearr_11392_11411[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11380 === 11))
{var inst_11373 = (state_11379[2]);var state_11379__$1 = state_11379;var statearr_11393_11412 = state_11379__$1;(statearr_11393_11412[2] = inst_11373);
(statearr_11393_11412[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11380 === 12))
{var inst_11355 = (state_11379[7]);var inst_11368 = (state_11379[2]);var tmp11391 = inst_11355;var inst_11355__$1 = tmp11391;var state_11379__$1 = (function (){var statearr_11394 = state_11379;(statearr_11394[10] = inst_11368);
(statearr_11394[7] = inst_11355__$1);
return statearr_11394;
})();var statearr_11395_11413 = state_11379__$1;(statearr_11395_11413[2] = null);
(statearr_11395_11413[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11399 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11399[0] = state_machine__5532__auto__);
(statearr_11399[1] = 1);
return statearr_11399;
});
var state_machine__5532__auto____1 = (function (state_11379){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11400){if((e11400 instanceof Object))
{var ex__5535__auto__ = e11400;var statearr_11401_11414 = state_11379;(statearr_11401_11414[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11415 = state_11379;
state_11379 = G__11415;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11379){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11402 = f__5547__auto__.call(null);(statearr_11402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11403);
return statearr_11402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.distinct = (function distinct(in$){var out = cljs.core.async.chan.call(null);var c__5546__auto___11500 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11478){var state_val_11479 = (state_11478[1]);if((state_val_11479 === 1))
{var inst_11458 = null;var state_11478__$1 = (function (){var statearr_11480 = state_11478;(statearr_11480[7] = inst_11458);
return statearr_11480;
})();var statearr_11481_11501 = state_11478__$1;(statearr_11481_11501[2] = null);
(statearr_11481_11501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 2))
{var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11478__$1,4,in$);
} else
{if((state_val_11479 === 3))
{var inst_11476 = (state_11478[2]);var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11478__$1,inst_11476);
} else
{if((state_val_11479 === 4))
{var inst_11461 = (state_11478[8]);var inst_11461__$1 = (state_11478[2]);var state_11478__$1 = (function (){var statearr_11482 = state_11478;(statearr_11482[8] = inst_11461__$1);
return statearr_11482;
})();if(cljs.core.truth_(inst_11461__$1))
{var statearr_11483_11502 = state_11478__$1;(statearr_11483_11502[1] = 5);
} else
{var statearr_11484_11503 = state_11478__$1;(statearr_11484_11503[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 5))
{var inst_11458 = (state_11478[7]);var inst_11461 = (state_11478[8]);var inst_11463 = cljs.core.not_EQ_.call(null,inst_11461,inst_11458);var state_11478__$1 = state_11478;if(inst_11463)
{var statearr_11485_11504 = state_11478__$1;(statearr_11485_11504[1] = 8);
} else
{var statearr_11486_11505 = state_11478__$1;(statearr_11486_11505[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 6))
{var inst_11472 = cljs.core.async.close_BANG_.call(null,out);var state_11478__$1 = state_11478;var statearr_11487_11506 = state_11478__$1;(statearr_11487_11506[2] = inst_11472);
(statearr_11487_11506[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 7))
{var inst_11474 = (state_11478[2]);var state_11478__$1 = state_11478;var statearr_11488_11507 = state_11478__$1;(statearr_11488_11507[2] = inst_11474);
(statearr_11488_11507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 8))
{var inst_11461 = (state_11478[8]);var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11478__$1,11,out,inst_11461);
} else
{if((state_val_11479 === 9))
{var state_11478__$1 = state_11478;var statearr_11489_11508 = state_11478__$1;(statearr_11489_11508[2] = null);
(statearr_11489_11508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 10))
{var inst_11461 = (state_11478[8]);var inst_11469 = (state_11478[2]);var inst_11458 = inst_11461;var state_11478__$1 = (function (){var statearr_11490 = state_11478;(statearr_11490[7] = inst_11458);
(statearr_11490[9] = inst_11469);
return statearr_11490;
})();var statearr_11491_11509 = state_11478__$1;(statearr_11491_11509[2] = null);
(statearr_11491_11509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 11))
{var inst_11466 = (state_11478[2]);var state_11478__$1 = state_11478;var statearr_11492_11510 = state_11478__$1;(statearr_11492_11510[2] = inst_11466);
(statearr_11492_11510[1] = 10);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11496 = [null,null,null,null,null,null,null,null,null,null];(statearr_11496[0] = state_machine__5532__auto__);
(statearr_11496[1] = 1);
return statearr_11496;
});
var state_machine__5532__auto____1 = (function (state_11478){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11497){if((e11497 instanceof Object))
{var ex__5535__auto__ = e11497;var statearr_11498_11511 = state_11478;(statearr_11498_11511[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11512 = state_11478;
state_11478 = G__11512;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11478){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11499 = f__5547__auto__.call(null);(statearr_11499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11500);
return statearr_11499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.fan_in = (function() {
var fan_in = null;
var fan_in__1 = (function (ins){return fan_in.call(null,ins,cljs.core.async.chan.call(null));
});
var fan_in__2 = (function (ins,out){var c__5546__auto___11621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11596){var state_val_11597 = (state_11596[1]);if((state_val_11597 === 1))
{var inst_11567 = cljs.core.vec.call(null,ins);var inst_11568 = inst_11567;var state_11596__$1 = (function (){var statearr_11598 = state_11596;(statearr_11598[7] = inst_11568);
return statearr_11598;
})();var statearr_11599_11622 = state_11596__$1;(statearr_11599_11622[2] = null);
(statearr_11599_11622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11597 === 2))
{var inst_11568 = (state_11596[7]);var inst_11570 = cljs.core.count.call(null,inst_11568);var inst_11571 = (inst_11570 > 0);var state_11596__$1 = state_11596;if(cljs.core.truth_(inst_11571))
{var statearr_11600_11623 = state_11596__$1;(statearr_11600_11623[1] = 4);
} else
{var statearr_11601_11624 = state_11596__$1;(statearr_11601_11624[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11597 === 3))
{var inst_11593 = (state_11596[2]);var inst_11594 = cljs.core.async.close_BANG_.call(null,out);var state_11596__$1 = (function (){var statearr_11602 = state_11596;(statearr_11602[8] = inst_11593);
return statearr_11602;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11596__$1,inst_11594);
} else
{if((state_val_11597 === 4))
{var inst_11568 = (state_11596[7]);var state_11596__$1 = state_11596;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11596__$1,7,inst_11568);
} else
{if((state_val_11597 === 5))
{var state_11596__$1 = state_11596;var statearr_11603_11625 = state_11596__$1;(statearr_11603_11625[2] = null);
(statearr_11603_11625[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11597 === 6))
{var inst_11591 = (state_11596[2]);var state_11596__$1 = state_11596;var statearr_11604_11626 = state_11596__$1;(statearr_11604_11626[2] = inst_11591);
(statearr_11604_11626[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11597 === 7))
{var inst_11576 = (state_11596[9]);var inst_11575 = (state_11596[2]);var inst_11576__$1 = cljs.core.nth.call(null,inst_11575,0,null);var inst_11577 = cljs.core.nth.call(null,inst_11575,1,null);var state_11596__$1 = (function (){var statearr_11605 = state_11596;(statearr_11605[10] = inst_11577);
(statearr_11605[9] = inst_11576__$1);
return statearr_11605;
})();if(cljs.core.truth_(inst_11576__$1))
{var statearr_11606_11627 = state_11596__$1;(statearr_11606_11627[1] = 8);
} else
{var statearr_11607_11628 = state_11596__$1;(statearr_11607_11628[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11597 === 8))
{var inst_11576 = (state_11596[9]);var state_11596__$1 = state_11596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11596__$1,11,out,inst_11576);
} else
{if((state_val_11597 === 9))
{var state_11596__$1 = state_11596;var statearr_11609_11629 = state_11596__$1;(statearr_11609_11629[2] = null);
(statearr_11609_11629[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11597 === 10))
{var inst_11577 = (state_11596[10]);var inst_11568 = (state_11596[7]);var inst_11584 = (state_11596[2]);var inst_11585 = cljs.core.set.call(null,inst_11568);var inst_11586 = cljs.core.disj.call(null,inst_11585,inst_11577);var inst_11587 = cljs.core.vec.call(null,inst_11586);var inst_11568__$1 = inst_11587;var state_11596__$1 = (function (){var statearr_11610 = state_11596;(statearr_11610[11] = inst_11584);
(statearr_11610[7] = inst_11568__$1);
return statearr_11610;
})();var statearr_11611_11630 = state_11596__$1;(statearr_11611_11630[2] = null);
(statearr_11611_11630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11597 === 11))
{var inst_11568 = (state_11596[7]);var inst_11580 = (state_11596[2]);var tmp11608 = inst_11568;var inst_11568__$1 = tmp11608;var state_11596__$1 = (function (){var statearr_11612 = state_11596;(statearr_11612[12] = inst_11580);
(statearr_11612[7] = inst_11568__$1);
return statearr_11612;
})();var statearr_11613_11631 = state_11596__$1;(statearr_11613_11631[2] = null);
(statearr_11613_11631[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11617 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11617[0] = state_machine__5532__auto__);
(statearr_11617[1] = 1);
return statearr_11617;
});
var state_machine__5532__auto____1 = (function (state_11596){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11618){if((e11618 instanceof Object))
{var ex__5535__auto__ = e11618;var statearr_11619_11632 = state_11596;(statearr_11619_11632[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11633 = state_11596;
state_11596 = G__11633;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11596){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11620 = f__5547__auto__.call(null);(statearr_11620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11621);
return statearr_11620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var take_until__3 = (function (pred_sentinel,in$,out){var c__5546__auto___11718 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11697){var state_val_11698 = (state_11697[1]);if((state_val_11698 === 1))
{var state_11697__$1 = state_11697;var statearr_11699_11719 = state_11697__$1;(statearr_11699_11719[2] = null);
(statearr_11699_11719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 2))
{var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11697__$1,4,in$);
} else
{if((state_val_11698 === 3))
{var inst_11695 = (state_11697[2]);var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11697__$1,inst_11695);
} else
{if((state_val_11698 === 4))
{var inst_11678 = (state_11697[7]);var inst_11678__$1 = (state_11697[2]);var state_11697__$1 = (function (){var statearr_11700 = state_11697;(statearr_11700[7] = inst_11678__$1);
return statearr_11700;
})();if(cljs.core.truth_(inst_11678__$1))
{var statearr_11701_11720 = state_11697__$1;(statearr_11701_11720[1] = 5);
} else
{var statearr_11702_11721 = state_11697__$1;(statearr_11702_11721[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 5))
{var inst_11678 = (state_11697[7]);var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11697__$1,8,out,inst_11678);
} else
{if((state_val_11698 === 6))
{var inst_11691 = cljs.core.async.close_BANG_.call(null,out);var state_11697__$1 = state_11697;var statearr_11703_11722 = state_11697__$1;(statearr_11703_11722[2] = inst_11691);
(statearr_11703_11722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 7))
{var inst_11693 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11704_11723 = state_11697__$1;(statearr_11704_11723[2] = inst_11693);
(statearr_11704_11723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 8))
{var inst_11678 = (state_11697[7]);var inst_11681 = (state_11697[2]);var inst_11682 = pred_sentinel.call(null,inst_11678);var inst_11683 = cljs.core.not.call(null,inst_11682);var state_11697__$1 = (function (){var statearr_11705 = state_11697;(statearr_11705[8] = inst_11681);
return statearr_11705;
})();if(inst_11683)
{var statearr_11706_11724 = state_11697__$1;(statearr_11706_11724[1] = 9);
} else
{var statearr_11707_11725 = state_11697__$1;(statearr_11707_11725[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 9))
{var state_11697__$1 = state_11697;var statearr_11708_11726 = state_11697__$1;(statearr_11708_11726[2] = null);
(statearr_11708_11726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 10))
{var inst_11687 = cljs.core.async.close_BANG_.call(null,out);var state_11697__$1 = state_11697;var statearr_11709_11727 = state_11697__$1;(statearr_11709_11727[2] = inst_11687);
(statearr_11709_11727[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 11))
{var inst_11689 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11710_11728 = state_11697__$1;(statearr_11710_11728[2] = inst_11689);
(statearr_11710_11728[1] = 7);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11714 = [null,null,null,null,null,null,null,null,null];(statearr_11714[0] = state_machine__5532__auto__);
(statearr_11714[1] = 1);
return statearr_11714;
});
var state_machine__5532__auto____1 = (function (state_11697){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11715){if((e11715 instanceof Object))
{var ex__5535__auto__ = e11715;var statearr_11716_11729 = state_11697;(statearr_11716_11729[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11730 = state_11697;
state_11697 = G__11730;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11717 = f__5547__auto__.call(null);(statearr_11717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11718);
return statearr_11717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var siphon__2 = (function (in$,coll){var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11775){var state_val_11776 = (state_11775[1]);if((state_val_11776 === 7))
{var inst_11771 = (state_11775[2]);var state_11775__$1 = state_11775;var statearr_11777_11793 = state_11775__$1;(statearr_11777_11793[2] = inst_11771);
(statearr_11777_11793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 6))
{var inst_11762 = (state_11775[7]);var state_11775__$1 = state_11775;var statearr_11778_11794 = state_11775__$1;(statearr_11778_11794[2] = inst_11762);
(statearr_11778_11794[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 5))
{var inst_11765 = (state_11775[8]);var inst_11762 = (state_11775[7]);var inst_11767 = cljs.core.conj.call(null,inst_11762,inst_11765);var inst_11762__$1 = inst_11767;var state_11775__$1 = (function (){var statearr_11779 = state_11775;(statearr_11779[7] = inst_11762__$1);
return statearr_11779;
})();var statearr_11780_11795 = state_11775__$1;(statearr_11780_11795[2] = null);
(statearr_11780_11795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 4))
{var inst_11765 = (state_11775[8]);var inst_11765__$1 = (state_11775[2]);var state_11775__$1 = (function (){var statearr_11781 = state_11775;(statearr_11781[8] = inst_11765__$1);
return statearr_11781;
})();if(cljs.core.truth_(inst_11765__$1))
{var statearr_11782_11796 = state_11775__$1;(statearr_11782_11796[1] = 5);
} else
{var statearr_11783_11797 = state_11775__$1;(statearr_11783_11797[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 3))
{var inst_11773 = (state_11775[2]);var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11775__$1,inst_11773);
} else
{if((state_val_11776 === 2))
{var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11775__$1,4,in$);
} else
{if((state_val_11776 === 1))
{var inst_11762 = coll;var state_11775__$1 = (function (){var statearr_11784 = state_11775;(statearr_11784[7] = inst_11762);
return statearr_11784;
})();var statearr_11785_11798 = state_11775__$1;(statearr_11785_11798[2] = null);
(statearr_11785_11798[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11789 = [null,null,null,null,null,null,null,null,null];(statearr_11789[0] = state_machine__5532__auto__);
(statearr_11789[1] = 1);
return statearr_11789;
});
var state_machine__5532__auto____1 = (function (state_11775){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11790){if((e11790 instanceof Object))
{var ex__5535__auto__ = e11790;var statearr_11791_11799 = state_11775;(statearr_11791_11799[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11800 = state_11775;
state_11775 = G__11800;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11775){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11792 = f__5547__auto__.call(null);(statearr_11792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_11792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return c__5546__auto__;
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
blog.utils.reactive.always = (function always(v,c){var out = cljs.core.async.chan.call(null);var c__5546__auto___11861 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11845){var state_val_11846 = (state_11845[1]);if((state_val_11846 === 8))
{var inst_11836 = (state_11845[2]);var state_11845__$1 = (function (){var statearr_11847 = state_11845;(statearr_11847[7] = inst_11836);
return statearr_11847;
})();var statearr_11848_11862 = state_11845__$1;(statearr_11848_11862[2] = null);
(statearr_11848_11862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 7))
{var inst_11841 = (state_11845[2]);var state_11845__$1 = state_11845;var statearr_11849_11863 = state_11845__$1;(statearr_11849_11863[2] = inst_11841);
(statearr_11849_11863[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 6))
{var inst_11839 = cljs.core.async.close_BANG_.call(null,out);var state_11845__$1 = state_11845;var statearr_11850_11864 = state_11845__$1;(statearr_11850_11864[2] = inst_11839);
(statearr_11850_11864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 5))
{var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,8,out,v);
} else
{if((state_val_11846 === 4))
{var inst_11833 = (state_11845[2]);var state_11845__$1 = state_11845;if(cljs.core.truth_(inst_11833))
{var statearr_11851_11865 = state_11845__$1;(statearr_11851_11865[1] = 5);
} else
{var statearr_11852_11866 = state_11845__$1;(statearr_11852_11866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 3))
{var inst_11843 = (state_11845[2]);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else
{if((state_val_11846 === 2))
{var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11845__$1,4,c);
} else
{if((state_val_11846 === 1))
{var state_11845__$1 = state_11845;var statearr_11853_11867 = state_11845__$1;(statearr_11853_11867[2] = null);
(statearr_11853_11867[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_11857 = [null,null,null,null,null,null,null,null];(statearr_11857[0] = state_machine__5532__auto__);
(statearr_11857[1] = 1);
return statearr_11857;
});
var state_machine__5532__auto____1 = (function (state_11845){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11845);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e11858){if((e11858 instanceof Object))
{var ex__5535__auto__ = e11858;var statearr_11859_11868 = state_11845;(statearr_11859_11868[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11869 = state_11845;
state_11845 = G__11869;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_11860 = f__5547__auto__.call(null);(statearr_11860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___11861);
return statearr_11860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.toggle = (function toggle(in$){var out = cljs.core.async.chan.call(null);var control = cljs.core.async.chan.call(null);var c__5546__auto___12018 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_11986){var state_val_11987 = (state_11986[1]);if((state_val_11987 === 1))
{var inst_11944 = true;var state_11986__$1 = (function (){var statearr_11988 = state_11986;(statearr_11988[7] = inst_11944);
return statearr_11988;
})();var statearr_11989_12019 = state_11986__$1;(statearr_11989_12019[2] = null);
(statearr_11989_12019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 2))
{var inst_11951 = [in$,control];var inst_11952 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11951,null));var state_11986__$1 = state_11986;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11986__$1,4,inst_11952);
} else
{if((state_val_11987 === 3))
{var inst_11984 = (state_11986[2]);var state_11986__$1 = state_11986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11986__$1,inst_11984);
} else
{if((state_val_11987 === 4))
{var inst_11956 = (state_11986[8]);var inst_11954 = (state_11986[9]);var inst_11954__$1 = (state_11986[2]);var inst_11955 = cljs.core.nth.call(null,inst_11954__$1,0,null);var inst_11956__$1 = cljs.core.nth.call(null,inst_11954__$1,1,null);var inst_11957 = cljs.core._EQ_.call(null,inst_11956__$1,in$);var state_11986__$1 = (function (){var statearr_11990 = state_11986;(statearr_11990[8] = inst_11956__$1);
(statearr_11990[10] = inst_11955);
(statearr_11990[9] = inst_11954__$1);
return statearr_11990;
})();if(inst_11957)
{var statearr_11991_12020 = state_11986__$1;(statearr_11991_12020[1] = 5);
} else
{var statearr_11992_12021 = state_11986__$1;(statearr_11992_12021[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 5))
{var inst_11944 = (state_11986[7]);var inst_11954 = (state_11986[9]);var inst_11960 = cljs.core.nth.call(null,inst_11954,0,null);var state_11986__$1 = (function (){var statearr_11993 = state_11986;(statearr_11993[11] = inst_11960);
return statearr_11993;
})();if(cljs.core.truth_(inst_11944))
{var statearr_11994_12022 = state_11986__$1;(statearr_11994_12022[1] = 8);
} else
{var statearr_11995_12023 = state_11986__$1;(statearr_11995_12023[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 6))
{var inst_11956 = (state_11986[8]);var inst_11968 = cljs.core._EQ_.call(null,inst_11956,control);var state_11986__$1 = state_11986;if(inst_11968)
{var statearr_11996_12024 = state_11986__$1;(statearr_11996_12024[1] = 12);
} else
{var statearr_11997_12025 = state_11986__$1;(statearr_11997_12025[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 7))
{var inst_11981 = (state_11986[2]);var inst_11944 = inst_11981;var state_11986__$1 = (function (){var statearr_11998 = state_11986;(statearr_11998[7] = inst_11944);
return statearr_11998;
})();var statearr_11999_12026 = state_11986__$1;(statearr_11999_12026[2] = null);
(statearr_11999_12026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 8))
{var inst_11960 = (state_11986[11]);var state_11986__$1 = state_11986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11986__$1,11,out,inst_11960);
} else
{if((state_val_11987 === 9))
{var state_11986__$1 = state_11986;var statearr_12000_12027 = state_11986__$1;(statearr_12000_12027[2] = null);
(statearr_12000_12027[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 10))
{var inst_11944 = (state_11986[7]);var inst_11966 = (state_11986[2]);var state_11986__$1 = (function (){var statearr_12001 = state_11986;(statearr_12001[12] = inst_11966);
return statearr_12001;
})();var statearr_12002_12028 = state_11986__$1;(statearr_12002_12028[2] = inst_11944);
(statearr_12002_12028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 11))
{var inst_11963 = (state_11986[2]);var state_11986__$1 = state_11986;var statearr_12003_12029 = state_11986__$1;(statearr_12003_12029[2] = inst_11963);
(statearr_12003_12029[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 12))
{var inst_11954 = (state_11986[9]);var inst_11971 = cljs.core.nth.call(null,inst_11954,0,null);var state_11986__$1 = state_11986;var statearr_12004_12030 = state_11986__$1;(statearr_12004_12030[2] = inst_11971);
(statearr_12004_12030[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 13))
{var inst_11956 = (state_11986[8]);var inst_11973 = cljs.core._EQ_.call(null,inst_11956,new cljs.core.Keyword(null,"default","default",2558708147));var state_11986__$1 = state_11986;if(inst_11973)
{var statearr_12005_12031 = state_11986__$1;(statearr_12005_12031[1] = 15);
} else
{var statearr_12006_12032 = state_11986__$1;(statearr_12006_12032[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 14))
{var inst_11979 = (state_11986[2]);var state_11986__$1 = state_11986;var statearr_12007_12033 = state_11986__$1;(statearr_12007_12033[2] = inst_11979);
(statearr_12007_12033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 15))
{var inst_11955 = (state_11986[10]);var state_11986__$1 = state_11986;var statearr_12008_12034 = state_11986__$1;(statearr_12008_12034[2] = inst_11955);
(statearr_12008_12034[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 16))
{var state_11986__$1 = state_11986;var statearr_12009_12035 = state_11986__$1;(statearr_12009_12035[2] = null);
(statearr_12009_12035[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11987 === 17))
{var inst_11977 = (state_11986[2]);var state_11986__$1 = state_11986;var statearr_12010_12036 = state_11986__$1;(statearr_12010_12036[2] = inst_11977);
(statearr_12010_12036[1] = 14);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_12014 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12014[0] = state_machine__5532__auto__);
(statearr_12014[1] = 1);
return statearr_12014;
});
var state_machine__5532__auto____1 = (function (state_11986){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_11986);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e12015){if((e12015 instanceof Object))
{var ex__5535__auto__ = e12015;var statearr_12016_12037 = state_11986;(statearr_12016_12037[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11986);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12038 = state_11986;
state_11986 = G__12038;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_11986){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_11986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_12017 = f__5547__auto__.call(null);(statearr_12017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___12018);
return statearr_12017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan","chan",1016956612),out,new cljs.core.Keyword(null,"control","control",1965447375),control], null);
});
blog.utils.reactive.barrier = (function barrier(cs){var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_12091){var state_val_12092 = (state_12091[1]);if((state_val_12092 === 7))
{var inst_12079 = (state_12091[7]);var inst_12076 = (state_12091[8]);var inst_12082 = (state_12091[2]);var inst_12083 = cljs.core.conj.call(null,inst_12076,inst_12082);var inst_12075 = inst_12079;var inst_12076__$1 = inst_12083;var state_12091__$1 = (function (){var statearr_12093 = state_12091;(statearr_12093[9] = inst_12075);
(statearr_12093[8] = inst_12076__$1);
return statearr_12093;
})();var statearr_12094_12109 = state_12091__$1;(statearr_12094_12109[2] = null);
(statearr_12094_12109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12092 === 6))
{var inst_12087 = (state_12091[2]);var state_12091__$1 = state_12091;var statearr_12095_12110 = state_12091__$1;(statearr_12095_12110[2] = inst_12087);
(statearr_12095_12110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12092 === 5))
{var inst_12076 = (state_12091[8]);var state_12091__$1 = state_12091;var statearr_12096_12111 = state_12091__$1;(statearr_12096_12111[2] = inst_12076);
(statearr_12096_12111[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12092 === 4))
{var inst_12075 = (state_12091[9]);var inst_12079 = cljs.core.next.call(null,inst_12075);var inst_12080 = cljs.core.first.call(null,inst_12075);var state_12091__$1 = (function (){var statearr_12097 = state_12091;(statearr_12097[7] = inst_12079);
return statearr_12097;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12091__$1,7,inst_12080);
} else
{if((state_val_12092 === 3))
{var inst_12089 = (state_12091[2]);var state_12091__$1 = state_12091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12091__$1,inst_12089);
} else
{if((state_val_12092 === 2))
{var inst_12075 = (state_12091[9]);var state_12091__$1 = state_12091;if(cljs.core.truth_(inst_12075))
{var statearr_12098_12112 = state_12091__$1;(statearr_12098_12112[1] = 4);
} else
{var statearr_12099_12113 = state_12091__$1;(statearr_12099_12113[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12092 === 1))
{var inst_12074 = cljs.core.seq.call(null,cs);var inst_12075 = inst_12074;var inst_12076 = cljs.core.PersistentVector.EMPTY;var state_12091__$1 = (function (){var statearr_12100 = state_12091;(statearr_12100[9] = inst_12075);
(statearr_12100[8] = inst_12076);
return statearr_12100;
})();var statearr_12101_12114 = state_12091__$1;(statearr_12101_12114[2] = null);
(statearr_12101_12114[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_12105 = [null,null,null,null,null,null,null,null,null,null];(statearr_12105[0] = state_machine__5532__auto__);
(statearr_12105[1] = 1);
return statearr_12105;
});
var state_machine__5532__auto____1 = (function (state_12091){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_12091);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e12106){if((e12106 instanceof Object))
{var ex__5535__auto__ = e12106;var statearr_12107_12115 = state_12091;(statearr_12107_12115[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12116 = state_12091;
state_12091 = G__12116;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_12091){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_12091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_12108 = f__5547__auto__.call(null);(statearr_12108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_12108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return c__5546__auto__;
});
blog.utils.reactive.cyclic_barrier = (function cyclic_barrier(cs){var out = cljs.core.async.chan.call(null);var c__5546__auto___12161 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_12149){var state_val_12150 = (state_12149[1]);if((state_val_12150 === 5))
{var inst_12142 = (state_12149[2]);var state_12149__$1 = state_12149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12149__$1,4,out,inst_12142);
} else
{if((state_val_12150 === 4))
{var inst_12144 = (state_12149[2]);var state_12149__$1 = (function (){var statearr_12151 = state_12149;(statearr_12151[7] = inst_12144);
return statearr_12151;
})();var statearr_12152_12162 = state_12149__$1;(statearr_12152_12162[2] = null);
(statearr_12152_12162[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12150 === 3))
{var inst_12147 = (state_12149[2]);var state_12149__$1 = state_12149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12149__$1,inst_12147);
} else
{if((state_val_12150 === 2))
{var inst_12140 = blog.utils.reactive.barrier.call(null,cs);var state_12149__$1 = state_12149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12149__$1,5,inst_12140);
} else
{if((state_val_12150 === 1))
{var state_12149__$1 = state_12149;var statearr_12153_12163 = state_12149__$1;(statearr_12153_12163[2] = null);
(statearr_12153_12163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_12157 = [null,null,null,null,null,null,null,null];(statearr_12157[0] = state_machine__5532__auto__);
(statearr_12157[1] = 1);
return statearr_12157;
});
var state_machine__5532__auto____1 = (function (state_12149){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_12149);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e12158){if((e12158 instanceof Object))
{var ex__5535__auto__ = e12158;var statearr_12159_12164 = state_12149;(statearr_12159_12164[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12165 = state_12149;
state_12149 = G__12165;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_12149){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_12149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_12160 = f__5547__auto__.call(null);(statearr_12160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___12161);
return statearr_12160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return out;
});
blog.utils.reactive.mouse_enter = (function mouse_enter(el){var matcher = blog.utils.dom.el_matcher.call(null,el);return blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594)),blog.utils.reactive.filter.call(null,(function (e){var and__3419__auto__ = (el === e.target);if(and__3419__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3419__auto__;
}
}),blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963))));
});
blog.utils.reactive.mouse_leave = (function mouse_leave(el){var matcher = blog.utils.dom.el_matcher.call(null,el);return blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"leave","leave",1116750377)),blog.utils.reactive.filter.call(null,(function (e){var and__3419__auto__ = (el === e.target);if(and__3419__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3419__auto__;
}
}),blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));
});
blog.utils.reactive.hover = (function hover(el){return blog.utils.reactive.distinct.call(null,blog.utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.reactive.mouse_enter.call(null,el),blog.utils.reactive.mouse_leave.call(null,el)], null)));
});
blog.utils.reactive.hover_child = (function hover_child(el,tag){var matcher = blog.utils.dom.tag_match.call(null,tag);var over = blog.utils.reactive.map.call(null,((function (matcher){
return (function (p1__12167_SHARP_){return blog.utils.helpers.index_of.call(null,blog.utils.dom.by_tag_name.call(null,el,tag),p1__12167_SHARP_);
});})(matcher))
,blog.utils.reactive.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-match","no-match",570153515),null], null), null),blog.utils.reactive.map.call(null,((function (matcher){
return (function (p1__12166_SHARP_){var target = p1__12166_SHARP_.target;if(cljs.core.truth_(matcher.call(null,target)))
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
return (function (e){var and__3419__auto__ = matcher.call(null,e.target);if(cljs.core.truth_(and__3419__auto__))
{var rel_target = e.relatedTarget;var rel_target__$1 = ((rel_target == null)) || (cljs.core.not.call(null,matcher.call(null,rel_target)));return rel_target__$1;
} else
{return and__3419__auto__;
}
});})(matcher,over))
,blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));return blog.utils.reactive.distinct.call(null,blog.utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [over,out], null)));
});
blog.utils.reactive.jsonp = (function() {
var jsonp = null;
var jsonp__1 = (function (uri){return jsonp.call(null,cljs.core.async.chan.call(null),uri);
});
var jsonp__2 = (function (c,uri){var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));gjsonp.send(null,(function (p1__12168_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__12168_SHARP_);
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
var throttle_STAR___4 = (function (in$,msecs,out,control){var c__5546__auto___12453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_12400){var state_val_12401 = (state_12400[1]);if((state_val_12401 === 1))
{var inst_12311 = [in$,control];var inst_12312 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12311,null));var inst_12313 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_12314 = null;var inst_12315 = inst_12312;var state_12400__$1 = (function (){var statearr_12402 = state_12400;(statearr_12402[7] = inst_12313);
(statearr_12402[8] = inst_12314);
(statearr_12402[9] = inst_12315);
return statearr_12402;
})();var statearr_12403_12454 = state_12400__$1;(statearr_12403_12454[2] = null);
(statearr_12403_12454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 2))
{var inst_12315 = (state_12400[9]);var inst_12318 = cljs.core.nth.call(null,inst_12315,0,null);var inst_12319 = cljs.core.nth.call(null,inst_12315,1,null);var inst_12320 = cljs.core.nth.call(null,inst_12315,2,null);var state_12400__$1 = (function (){var statearr_12404 = state_12400;(statearr_12404[10] = inst_12319);
(statearr_12404[11] = inst_12318);
(statearr_12404[12] = inst_12320);
return statearr_12404;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12400__$1,4,inst_12315);
} else
{if((state_val_12401 === 3))
{var inst_12398 = (state_12400[2]);var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12400__$1,inst_12398);
} else
{if((state_val_12401 === 4))
{var inst_12325 = (state_12400[13]);var inst_12323 = (state_12400[2]);var inst_12324 = cljs.core.nth.call(null,inst_12323,0,null);var inst_12325__$1 = cljs.core.nth.call(null,inst_12323,1,null);var inst_12329 = cljs.core._EQ_.call(null,in$,inst_12325__$1);var state_12400__$1 = (function (){var statearr_12405 = state_12400;(statearr_12405[13] = inst_12325__$1);
(statearr_12405[14] = inst_12324);
return statearr_12405;
})();if(inst_12329)
{var statearr_12406_12455 = state_12400__$1;(statearr_12406_12455[1] = 5);
} else
{var statearr_12407_12456 = state_12400__$1;(statearr_12407_12456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 5))
{var inst_12313 = (state_12400[7]);var inst_12334 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324),inst_12313);var state_12400__$1 = state_12400;if(inst_12334)
{var statearr_12408_12457 = state_12400__$1;(statearr_12408_12457[1] = 8);
} else
{var statearr_12409_12458 = state_12400__$1;(statearr_12409_12458[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 6))
{var inst_12320 = (state_12400[12]);var inst_12325 = (state_12400[13]);var inst_12360 = cljs.core._EQ_.call(null,inst_12320,inst_12325);var state_12400__$1 = state_12400;if(inst_12360)
{var statearr_12410_12459 = state_12400__$1;(statearr_12410_12459[1] = 17);
} else
{var statearr_12411_12460 = state_12400__$1;(statearr_12411_12460[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 7))
{var inst_12396 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12412_12461 = state_12400__$1;(statearr_12412_12461[2] = inst_12396);
(statearr_12412_12461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 8))
{var inst_12324 = (state_12400[14]);var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12400__$1,11,out,inst_12324);
} else
{if((state_val_12401 === 9))
{var inst_12313 = (state_12400[7]);var inst_12346 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","throttling","blog.utils.reactive/throttling",3340209363),inst_12313);var state_12400__$1 = state_12400;if(inst_12346)
{var statearr_12413_12462 = state_12400__$1;(statearr_12413_12462[1] = 13);
} else
{var statearr_12414_12463 = state_12400__$1;(statearr_12414_12463[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 10))
{var inst_12358 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12416_12464 = state_12400__$1;(statearr_12416_12464[2] = inst_12358);
(statearr_12416_12464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 11))
{var inst_12324 = (state_12400[14]);var inst_12337 = (state_12400[2]);var inst_12338 = [new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890),inst_12324];var inst_12339 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12338,null));var state_12400__$1 = (function (){var statearr_12417 = state_12400;(statearr_12417[15] = inst_12337);
return statearr_12417;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12400__$1,12,out,inst_12339);
} else
{if((state_val_12401 === 12))
{var inst_12314 = (state_12400[8]);var inst_12315 = (state_12400[9]);var inst_12341 = (state_12400[2]);var inst_12342 = cljs.core.async.timeout.call(null,msecs);var inst_12343 = cljs.core.conj.call(null,inst_12315,inst_12342);var tmp12415 = inst_12314;var inst_12313 = new cljs.core.Keyword("blog.utils.reactive","throttling","blog.utils.reactive/throttling",3340209363);var inst_12314__$1 = tmp12415;var inst_12315__$1 = inst_12343;var state_12400__$1 = (function (){var statearr_12418 = state_12400;(statearr_12418[16] = inst_12341);
(statearr_12418[7] = inst_12313);
(statearr_12418[8] = inst_12314__$1);
(statearr_12418[9] = inst_12315__$1);
return statearr_12418;
})();var statearr_12419_12465 = state_12400__$1;(statearr_12419_12465[2] = null);
(statearr_12419_12465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 13))
{var inst_12324 = (state_12400[14]);var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12400__$1,16,out,inst_12324);
} else
{if((state_val_12401 === 14))
{var inst_12313 = (state_12400[7]);var inst_12352 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_12313)].join('');var inst_12353 = (new Error(inst_12352));var inst_12354 = (function(){throw inst_12353})();var state_12400__$1 = state_12400;var statearr_12422_12466 = state_12400__$1;(statearr_12422_12466[2] = inst_12354);
(statearr_12422_12466[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 15))
{var inst_12356 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12423_12467 = state_12400__$1;(statearr_12423_12467[2] = inst_12356);
(statearr_12423_12467[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 16))
{var inst_12313 = (state_12400[7]);var inst_12324 = (state_12400[14]);var inst_12315 = (state_12400[9]);var inst_12349 = (state_12400[2]);var tmp12420 = inst_12313;var tmp12421 = inst_12315;var inst_12313__$1 = tmp12420;var inst_12314 = inst_12324;var inst_12315__$1 = tmp12421;var state_12400__$1 = (function (){var statearr_12424 = state_12400;(statearr_12424[7] = inst_12313__$1);
(statearr_12424[17] = inst_12349);
(statearr_12424[8] = inst_12314);
(statearr_12424[9] = inst_12315__$1);
return statearr_12424;
})();var statearr_12425_12468 = state_12400__$1;(statearr_12425_12468[2] = null);
(statearr_12425_12468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 17))
{var inst_12314 = (state_12400[8]);var state_12400__$1 = state_12400;if(cljs.core.truth_(inst_12314))
{var statearr_12426_12469 = state_12400__$1;(statearr_12426_12469[1] = 20);
} else
{var statearr_12427_12470 = state_12400__$1;(statearr_12427_12470[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 18))
{var inst_12325 = (state_12400[13]);var inst_12377 = cljs.core._EQ_.call(null,control,inst_12325);var state_12400__$1 = state_12400;if(inst_12377)
{var statearr_12428_12471 = state_12400__$1;(statearr_12428_12471[1] = 24);
} else
{var statearr_12429_12472 = state_12400__$1;(statearr_12429_12472[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 19))
{var inst_12394 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12431_12473 = state_12400__$1;(statearr_12431_12473[2] = inst_12394);
(statearr_12431_12473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 20))
{var inst_12314 = (state_12400[8]);var inst_12363 = [new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890),inst_12314];var inst_12364 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12363,null));var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12400__$1,23,out,inst_12364);
} else
{if((state_val_12401 === 21))
{var inst_12314 = (state_12400[8]);var inst_12315 = (state_12400[9]);var inst_12372 = cljs.core.pop.call(null,inst_12315);var tmp12430 = inst_12314;var inst_12313 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_12314__$1 = tmp12430;var inst_12315__$1 = inst_12372;var state_12400__$1 = (function (){var statearr_12433 = state_12400;(statearr_12433[7] = inst_12313);
(statearr_12433[8] = inst_12314__$1);
(statearr_12433[9] = inst_12315__$1);
return statearr_12433;
})();var statearr_12434_12474 = state_12400__$1;(statearr_12434_12474[2] = null);
(statearr_12434_12474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 22))
{var inst_12375 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12435_12475 = state_12400__$1;(statearr_12435_12475[2] = inst_12375);
(statearr_12435_12475[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 23))
{var inst_12313 = (state_12400[7]);var inst_12315 = (state_12400[9]);var inst_12366 = (state_12400[2]);var inst_12367 = cljs.core.pop.call(null,inst_12315);var inst_12368 = cljs.core.async.timeout.call(null,msecs);var inst_12369 = cljs.core.conj.call(null,inst_12367,inst_12368);var tmp12432 = inst_12313;var inst_12313__$1 = tmp12432;var inst_12314 = null;var inst_12315__$1 = inst_12369;var state_12400__$1 = (function (){var statearr_12436 = state_12400;(statearr_12436[7] = inst_12313__$1);
(statearr_12436[8] = inst_12314);
(statearr_12436[9] = inst_12315__$1);
(statearr_12436[18] = inst_12366);
return statearr_12436;
})();var statearr_12437_12476 = state_12400__$1;(statearr_12437_12476[2] = null);
(statearr_12437_12476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 24))
{var inst_12315 = (state_12400[9]);var inst_12379 = cljs.core.count.call(null,inst_12315);var inst_12380 = cljs.core._EQ_.call(null,inst_12379,3);var state_12400__$1 = state_12400;if(inst_12380)
{var statearr_12438_12477 = state_12400__$1;(statearr_12438_12477[1] = 27);
} else
{var statearr_12439_12478 = state_12400__$1;(statearr_12439_12478[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 25))
{var inst_12325 = (state_12400[13]);var inst_12388 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_12325)].join('');var inst_12389 = (new Error(inst_12388));var inst_12390 = (function(){throw inst_12389})();var state_12400__$1 = state_12400;var statearr_12440_12479 = state_12400__$1;(statearr_12440_12479[2] = inst_12390);
(statearr_12440_12479[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 26))
{var inst_12392 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12441_12480 = state_12400__$1;(statearr_12441_12480[2] = inst_12392);
(statearr_12441_12480[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 27))
{var inst_12315 = (state_12400[9]);var inst_12382 = cljs.core.pop.call(null,inst_12315);var state_12400__$1 = state_12400;var statearr_12442_12481 = state_12400__$1;(statearr_12442_12481[2] = inst_12382);
(statearr_12442_12481[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 28))
{var inst_12315 = (state_12400[9]);var state_12400__$1 = state_12400;var statearr_12443_12482 = state_12400__$1;(statearr_12443_12482[2] = inst_12315);
(statearr_12443_12482[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 29))
{var inst_12385 = (state_12400[2]);var inst_12313 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_12314 = null;var inst_12315 = inst_12385;var state_12400__$1 = (function (){var statearr_12444 = state_12400;(statearr_12444[7] = inst_12313);
(statearr_12444[8] = inst_12314);
(statearr_12444[9] = inst_12315);
return statearr_12444;
})();var statearr_12445_12483 = state_12400__$1;(statearr_12445_12483[2] = null);
(statearr_12445_12483[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_12449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12449[0] = state_machine__5532__auto__);
(statearr_12449[1] = 1);
return statearr_12449;
});
var state_machine__5532__auto____1 = (function (state_12400){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_12400);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e12450){if((e12450 instanceof Object))
{var ex__5535__auto__ = e12450;var statearr_12451_12484 = state_12400;(statearr_12451_12484[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12400);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12485 = state_12400;
state_12400 = G__12485;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_12400){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_12400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_12452 = f__5547__auto__.call(null);(statearr_12452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___12453);
return statearr_12452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var throttle__3 = (function (in$,msecs,out){return blog.utils.reactive.map.call(null,cljs.core.second,blog.utils.reactive.filter.call(null,(function (p1__12486_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__12486_SHARP_)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__12486_SHARP_),new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890)));
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
var debounce__3 = (function (out,source,msecs){var c__5546__auto___12673 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_12639){var state_val_12640 = (state_12639[1]);if((state_val_12640 === 1))
{var inst_12580 = [source];var inst_12581 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12580,null));var inst_12582 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_12583 = inst_12581;var state_12639__$1 = (function (){var statearr_12641 = state_12639;(statearr_12641[7] = inst_12583);
(statearr_12641[8] = inst_12582);
return statearr_12641;
})();var statearr_12642_12674 = state_12639__$1;(statearr_12642_12674[2] = null);
(statearr_12642_12674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 2))
{var inst_12583 = (state_12639[7]);var inst_12586 = cljs.core.nth.call(null,inst_12583,0,null);var inst_12587 = cljs.core.nth.call(null,inst_12583,1,null);var state_12639__$1 = (function (){var statearr_12643 = state_12639;(statearr_12643[9] = inst_12587);
(statearr_12643[10] = inst_12586);
return statearr_12643;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12639__$1,4,inst_12583);
} else
{if((state_val_12640 === 3))
{var inst_12637 = (state_12639[2]);var state_12639__$1 = state_12639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12639__$1,inst_12637);
} else
{if((state_val_12640 === 4))
{var inst_12592 = (state_12639[11]);var inst_12590 = (state_12639[2]);var inst_12591 = cljs.core.nth.call(null,inst_12590,0,null);var inst_12592__$1 = cljs.core.nth.call(null,inst_12590,1,null);var inst_12596 = cljs.core._EQ_.call(null,source,inst_12592__$1);var state_12639__$1 = (function (){var statearr_12644 = state_12639;(statearr_12644[11] = inst_12592__$1);
(statearr_12644[12] = inst_12591);
return statearr_12644;
})();if(inst_12596)
{var statearr_12645_12675 = state_12639__$1;(statearr_12645_12675[1] = 5);
} else
{var statearr_12646_12676 = state_12639__$1;(statearr_12646_12676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 5))
{var inst_12582 = (state_12639[8]);var inst_12601 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324),inst_12582);var state_12639__$1 = state_12639;if(inst_12601)
{var statearr_12647_12677 = state_12639__$1;(statearr_12647_12677[1] = 8);
} else
{var statearr_12648_12678 = state_12639__$1;(statearr_12648_12678[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 6))
{var inst_12592 = (state_12639[11]);var inst_12587 = (state_12639[9]);var inst_12624 = cljs.core._EQ_.call(null,inst_12587,inst_12592);var state_12639__$1 = state_12639;if(inst_12624)
{var statearr_12649_12679 = state_12639__$1;(statearr_12649_12679[1] = 15);
} else
{var statearr_12650_12680 = state_12639__$1;(statearr_12650_12680[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 7))
{var inst_12635 = (state_12639[2]);var state_12639__$1 = state_12639;var statearr_12651_12681 = state_12639__$1;(statearr_12651_12681[2] = inst_12635);
(statearr_12651_12681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 8))
{var inst_12591 = (state_12639[12]);var state_12639__$1 = state_12639;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12639__$1,11,out,inst_12591);
} else
{if((state_val_12640 === 9))
{var inst_12582 = (state_12639[8]);var inst_12609 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","debouncing","blog.utils.reactive/debouncing",1220316782),inst_12582);var state_12639__$1 = state_12639;if(inst_12609)
{var statearr_12652_12682 = state_12639__$1;(statearr_12652_12682[1] = 12);
} else
{var statearr_12653_12683 = state_12639__$1;(statearr_12653_12683[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 10))
{var inst_12622 = (state_12639[2]);var state_12639__$1 = state_12639;var statearr_12655_12684 = state_12639__$1;(statearr_12655_12684[2] = inst_12622);
(statearr_12655_12684[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 11))
{var inst_12583 = (state_12639[7]);var inst_12604 = (state_12639[2]);var inst_12605 = cljs.core.async.timeout.call(null,msecs);var inst_12606 = cljs.core.conj.call(null,inst_12583,inst_12605);var inst_12582 = new cljs.core.Keyword("blog.utils.reactive","debouncing","blog.utils.reactive/debouncing",1220316782);var inst_12583__$1 = inst_12606;var state_12639__$1 = (function (){var statearr_12656 = state_12639;(statearr_12656[7] = inst_12583__$1);
(statearr_12656[8] = inst_12582);
(statearr_12656[13] = inst_12604);
return statearr_12656;
})();var statearr_12657_12685 = state_12639__$1;(statearr_12657_12685[2] = null);
(statearr_12657_12685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 12))
{var inst_12583 = (state_12639[7]);var inst_12582 = (state_12639[8]);var inst_12611 = cljs.core.pop.call(null,inst_12583);var inst_12612 = cljs.core.async.timeout.call(null,msecs);var inst_12613 = cljs.core.conj.call(null,inst_12611,inst_12612);var tmp12654 = inst_12582;var inst_12582__$1 = tmp12654;var inst_12583__$1 = inst_12613;var state_12639__$1 = (function (){var statearr_12658 = state_12639;(statearr_12658[7] = inst_12583__$1);
(statearr_12658[8] = inst_12582__$1);
return statearr_12658;
})();var statearr_12659_12686 = state_12639__$1;(statearr_12659_12686[2] = null);
(statearr_12659_12686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 13))
{var inst_12582 = (state_12639[8]);var inst_12616 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_12582)].join('');var inst_12617 = (new Error(inst_12616));var inst_12618 = (function(){throw inst_12617})();var state_12639__$1 = state_12639;var statearr_12660_12687 = state_12639__$1;(statearr_12660_12687[2] = inst_12618);
(statearr_12660_12687[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 14))
{var inst_12620 = (state_12639[2]);var state_12639__$1 = state_12639;var statearr_12661_12688 = state_12639__$1;(statearr_12661_12688[2] = inst_12620);
(statearr_12661_12688[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 15))
{var inst_12583 = (state_12639[7]);var inst_12626 = cljs.core.pop.call(null,inst_12583);var inst_12582 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_12583__$1 = inst_12626;var state_12639__$1 = (function (){var statearr_12662 = state_12639;(statearr_12662[7] = inst_12583__$1);
(statearr_12662[8] = inst_12582);
return statearr_12662;
})();var statearr_12663_12689 = state_12639__$1;(statearr_12663_12689[2] = null);
(statearr_12663_12689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 16))
{var inst_12592 = (state_12639[11]);var inst_12629 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_12592)].join('');var inst_12630 = (new Error(inst_12629));var inst_12631 = (function(){throw inst_12630})();var state_12639__$1 = state_12639;var statearr_12664_12690 = state_12639__$1;(statearr_12664_12690[2] = inst_12631);
(statearr_12664_12690[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12640 === 17))
{var inst_12633 = (state_12639[2]);var state_12639__$1 = state_12639;var statearr_12665_12691 = state_12639__$1;(statearr_12665_12691[2] = inst_12633);
(statearr_12665_12691[1] = 7);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_12669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12669[0] = state_machine__5532__auto__);
(statearr_12669[1] = 1);
return statearr_12669;
});
var state_machine__5532__auto____1 = (function (state_12639){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_12639);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e12670){if((e12670 instanceof Object))
{var ex__5535__auto__ = e12670;var statearr_12671_12692 = state_12639;(statearr_12671_12692[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12639);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12693 = state_12639;
state_12639 = G__12693;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_12639){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_12639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_12672 = f__5547__auto__.call(null);(statearr_12672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___12673);
return statearr_12672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var G__12742__delegate = function (err,results){var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5546__auto__,out){
return (function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = ((function (c__5546__auto__,out){
return (function (state_12728){var state_val_12729 = (state_12728[1]);if((state_val_12729 === 6))
{var inst_12723 = (state_12728[2]);var state_12728__$1 = state_12728;var statearr_12730_12743 = state_12728__$1;(statearr_12730_12743[2] = inst_12723);
(statearr_12730_12743[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 5))
{var inst_12720 = (state_12728[2]);var state_12728__$1 = state_12728;var statearr_12731_12744 = state_12728__$1;(statearr_12731_12744[2] = inst_12720);
(statearr_12731_12744[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12729 === 4))
{var inst_12725 = (state_12728[2]);var inst_12726 = cljs.core.async.close_BANG_.call(null,out);var state_12728__$1 = (function (){var statearr_12732 = state_12728;(statearr_12732[7] = inst_12725);
return statearr_12732;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12728__$1,inst_12726);
} else
{if((state_val_12729 === 3))
{var state_12728__$1 = state_12728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12728__$1,6,out,results);
} else
{if((state_val_12729 === 2))
{var state_12728__$1 = state_12728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12728__$1,5,out,err);
} else
{if((state_val_12729 === 1))
{var state_12728__$1 = state_12728;if(cljs.core.truth_(err))
{var statearr_12733_12745 = state_12728__$1;(statearr_12733_12745[1] = 2);
} else
{var statearr_12734_12746 = state_12728__$1;(statearr_12734_12746[1] = 3);
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
});})(c__5546__auto__,out))
;return ((function (switch__5531__auto__,c__5546__auto__,out){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_12738 = [null,null,null,null,null,null,null,null];(statearr_12738[0] = state_machine__5532__auto__);
(statearr_12738[1] = 1);
return statearr_12738;
});
var state_machine__5532__auto____1 = (function (state_12728){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_12728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e12739){if((e12739 instanceof Object))
{var ex__5535__auto__ = e12739;var statearr_12740_12747 = state_12728;(statearr_12740_12747[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12748 = state_12728;
state_12728 = G__12748;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_12728){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_12728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__,c__5546__auto__,out))
})();var state__5548__auto__ = (function (){var statearr_12741 = f__5547__auto__.call(null);(statearr_12741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_12741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
});})(c__5546__auto__,out))
);
return c__5546__auto__;
};
var G__12742 = function (err,var_args){
var results = null;if (arguments.length > 1) {
  results = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__12742__delegate.call(this,err,results);};
G__12742.cljs$lang$maxFixedArity = 1;
G__12742.cljs$lang$applyTo = (function (arglist__12749){
var err = cljs.core.first(arglist__12749);
var results = cljs.core.rest(arglist__12749);
return G__12742__delegate(err,results);
});
G__12742.cljs$core$IFn$_invoke$arity$variadic = G__12742__delegate;
return G__12742;
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
run_task.cljs$lang$applyTo = (function (arglist__12750){
var f = cljs.core.first(arglist__12750);
var args = cljs.core.rest(arglist__12750);
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
task.cljs$lang$applyTo = (function (arglist__12751){
var args = cljs.core.seq(arglist__12751);
return task__delegate(args);
});
task.cljs$core$IFn$_invoke$arity$variadic = task__delegate;
return task;
})()
;

//# sourceMappingURL=reactive.js.map