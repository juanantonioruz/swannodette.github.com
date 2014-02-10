// Compiled by ClojureScript 0.0-2138
goog.provide('blog.responsive.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('blog.utils.reactive');
goog.require('goog.events.EventType');
goog.require('blog.utils.dom');
goog.require('blog.utils.reactive');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('blog.utils.dom');
cljs.core.enable_console_print_BANG_.call(null);
blog.responsive.core.ENTER = 13;
blog.responsive.core.UP_ARROW = 38;
blog.responsive.core.DOWN_ARROW = 40;
blog.responsive.core.TAB = 9;
blog.responsive.core.ESC = 27;
blog.responsive.core.KEYS = cljs.core.PersistentHashSet.fromArray([blog.responsive.core.TAB,blog.responsive.core.UP_ARROW,blog.responsive.core.DOWN_ARROW,blog.responsive.core.ESC,blog.responsive.core.ENTER], true);
blog.responsive.core.key_event__GT_keycode = (function key_event__GT_keycode(e){return e.keyCode;
});
blog.responsive.core.key__GT_keyword = (function key__GT_keyword(code){var pred__54388 = cljs.core._EQ_;var expr__54389 = code;if(cljs.core.truth_(pred__54388.call(null,blog.responsive.core.UP_ARROW,expr__54389)))
{return new cljs.core.Keyword(null,"previous","previous",4035096169);
} else
{if(cljs.core.truth_(pred__54388.call(null,blog.responsive.core.DOWN_ARROW,expr__54389)))
{return new cljs.core.Keyword(null,"next","next",1017282149);
} else
{if(cljs.core.truth_(pred__54388.call(null,blog.responsive.core.ENTER,expr__54389)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__54388.call(null,blog.responsive.core.TAB,expr__54389)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__54388.call(null,blog.responsive.core.ESC,expr__54389)))
{return new cljs.core.Keyword(null,"exit","exit",1017031824);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54389)].join('')));
}
}
}
}
}
});
blog.responsive.core.IHighlightable = (function (){var obj54392 = {};return obj54392;
})();
blog.responsive.core._highlight_BANG_ = (function _highlight_BANG_(list,n){if((function (){var and__4912__auto__ = list;if(and__4912__auto__)
{return list.blog$responsive$core$IHighlightable$_highlight_BANG_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return list.blog$responsive$core$IHighlightable$_highlight_BANG_$arity$2(list,n);
} else
{var x__5545__auto__ = (((list == null))?null:list);return (function (){var or__4924__auto__ = (blog.responsive.core._highlight_BANG_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (blog.responsive.core._highlight_BANG_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHighlightable.-highlight!",list);
}
}
})().call(null,list,n);
}
});
blog.responsive.core._unhighlight_BANG_ = (function _unhighlight_BANG_(list,n){if((function (){var and__4912__auto__ = list;if(and__4912__auto__)
{return list.blog$responsive$core$IHighlightable$_unhighlight_BANG_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return list.blog$responsive$core$IHighlightable$_unhighlight_BANG_$arity$2(list,n);
} else
{var x__5545__auto__ = (((list == null))?null:list);return (function (){var or__4924__auto__ = (blog.responsive.core._unhighlight_BANG_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (blog.responsive.core._unhighlight_BANG_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHighlightable.-unhighlight!",list);
}
}
})().call(null,list,n);
}
});
blog.responsive.core.ISelectable = (function (){var obj54394 = {};return obj54394;
})();
blog.responsive.core._select_BANG_ = (function _select_BANG_(list,n){if((function (){var and__4912__auto__ = list;if(and__4912__auto__)
{return list.blog$responsive$core$ISelectable$_select_BANG_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return list.blog$responsive$core$ISelectable$_select_BANG_$arity$2(list,n);
} else
{var x__5545__auto__ = (((list == null))?null:list);return (function (){var or__4924__auto__ = (blog.responsive.core._select_BANG_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (blog.responsive.core._select_BANG_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelectable.-select!",list);
}
}
})().call(null,list,n);
}
});
blog.responsive.core._unselect_BANG_ = (function _unselect_BANG_(list,n){if((function (){var and__4912__auto__ = list;if(and__4912__auto__)
{return list.blog$responsive$core$ISelectable$_unselect_BANG_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return list.blog$responsive$core$ISelectable$_unselect_BANG_$arity$2(list,n);
} else
{var x__5545__auto__ = (((list == null))?null:list);return (function (){var or__4924__auto__ = (blog.responsive.core._unselect_BANG_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (blog.responsive.core._unselect_BANG_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelectable.-unselect!",list);
}
}
})().call(null,list,n);
}
});
blog.responsive.core.handle_change_event = (function handle_change_event(list,idx,key){var cnt = cljs.core.count.call(null,list);try{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"next","next",1017282149)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,idx,new cljs.core.Keyword("blog.responsive.core","none","blog.responsive.core/none",1985040514)))
{return 0;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e54409){if((e54409 instanceof Error))
{var e__13265__auto__ = e54409;if((e__13265__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__13265__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54409;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"previous","previous",4035096169)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,idx,new cljs.core.Keyword("blog.responsive.core","none","blog.responsive.core/none",1985040514)))
{return (cnt - 1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e54410){if((e54410 instanceof Error))
{var e__13265__auto__ = e54410;if((e__13265__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__13265__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54410;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e54407){if((e54407 instanceof Error))
{var e__13265__auto__ = e54407;if((e__13265__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"next","next",1017282149)))
{return cljs.core.mod.call(null,(idx + 1),cnt);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"previous","previous",4035096169)))
{return cljs.core.mod.call(null,(idx - 1),cnt);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e54408){if((e54408 instanceof Error))
{var e__13265__auto____$1 = e54408;if((e__13265__auto____$1 === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(idx),cljs.core.str(" "),cljs.core.str(key)].join('')));
} else
{throw e__13265__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54408;
} else
{return null;
}
}
}} else
{throw e__13265__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54407;
} else
{return null;
}
}
}});
blog.responsive.core.handle_event = (function handle_event(e,cur,list){if(typeof cur === 'number')
{blog.responsive.core._unhighlight_BANG_.call(null,list,cur);
} else
{}
if(cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"clear","clear",1108650431)))
{return new cljs.core.Keyword("blog.responsive.core","none","blog.responsive.core/none",1985040514);
} else
{var n = ((typeof e === 'number')?e:blog.responsive.core.handle_change_event.call(null,list,cur,e));blog.responsive.core._highlight_BANG_.call(null,list,n);
return n;
}
});
blog.responsive.core.highlighter = (function() {
var highlighter = null;
var highlighter__2 = (function (in$,list){return highlighter.call(null,in$,list,cljs.core.async.chan.call(null));
});
var highlighter__3 = (function (in$,list,control){var out = cljs.core.async.chan.call(null);var c__8560__auto___54575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_54541){var state_val_54542 = (state_54541[1]);if((state_val_54542 === 1))
{var inst_54493 = new cljs.core.Keyword("blog.responsive.core","none","blog.responsive.core/none",1985040514);var state_54541__$1 = (function (){var statearr_54543 = state_54541;(statearr_54543[7] = inst_54493);
return statearr_54543;
})();var statearr_54544_54576 = state_54541__$1;(statearr_54544_54576[2] = null);
(statearr_54544_54576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 2))
{var inst_54496 = [in$,control];var inst_54497 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_54496,null));var state_54541__$1 = state_54541;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54541__$1,4,inst_54497);
} else
{if((state_val_54542 === 3))
{var inst_54539 = (state_54541[2]);var state_54541__$1 = state_54541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54541__$1,inst_54539);
} else
{if((state_val_54542 === 4))
{var inst_54501 = (state_54541[8]);var inst_54499 = (state_54541[2]);var inst_54500 = cljs.core.nth.call(null,inst_54499,0,null);var inst_54501__$1 = cljs.core.nth.call(null,inst_54499,1,null);var inst_54505 = cljs.core._EQ_.call(null,control,inst_54501__$1);var state_54541__$1 = (function (){var statearr_54545 = state_54541;(statearr_54545[9] = inst_54500);
(statearr_54545[8] = inst_54501__$1);
return statearr_54545;
})();if(inst_54505)
{var statearr_54546_54577 = state_54541__$1;(statearr_54546_54577[1] = 5);
} else
{var statearr_54547_54578 = state_54541__$1;(statearr_54547_54578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 5))
{var state_54541__$1 = state_54541;var statearr_54548_54579 = state_54541__$1;(statearr_54548_54579[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_54548_54579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 6))
{var inst_54501 = (state_54541[8]);var inst_54508 = cljs.core._EQ_.call(null,in$,inst_54501);var state_54541__$1 = state_54541;if(inst_54508)
{var statearr_54549_54580 = state_54541__$1;(statearr_54549_54580[1] = 8);
} else
{var statearr_54550_54581 = state_54541__$1;(statearr_54550_54581[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 7))
{var inst_54537 = (state_54541[2]);var state_54541__$1 = state_54541;var statearr_54551_54582 = state_54541__$1;(statearr_54551_54582[2] = inst_54537);
(statearr_54551_54582[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 8))
{var inst_54513 = (state_54541[10]);var inst_54500 = (state_54541[9]);var inst_54510 = [new cljs.core.Keyword(null,"previous","previous",4035096169),null,new cljs.core.Keyword(null,"clear","clear",1108650431),null,new cljs.core.Keyword(null,"next","next",1017282149),null];var inst_54511 = (new cljs.core.PersistentArrayMap(null,3,inst_54510,null));var inst_54512 = (new cljs.core.PersistentHashSet(null,inst_54511,null));var inst_54513__$1 = inst_54512.call(null,inst_54500);var state_54541__$1 = (function (){var statearr_54552 = state_54541;(statearr_54552[10] = inst_54513__$1);
return statearr_54552;
})();if(cljs.core.truth_(inst_54513__$1))
{var statearr_54553_54583 = state_54541__$1;(statearr_54553_54583[1] = 11);
} else
{var statearr_54554_54584 = state_54541__$1;(statearr_54554_54584[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 9))
{var inst_54501 = (state_54541[8]);var inst_54531 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_54501)].join('');var inst_54532 = (new Error(inst_54531));var inst_54533 = (function(){throw inst_54532})();var state_54541__$1 = state_54541;var statearr_54555_54585 = state_54541__$1;(statearr_54555_54585[2] = inst_54533);
(statearr_54555_54585[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 10))
{var inst_54535 = (state_54541[2]);var state_54541__$1 = state_54541;var statearr_54556_54586 = state_54541__$1;(statearr_54556_54586[2] = inst_54535);
(statearr_54556_54586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 11))
{var inst_54513 = (state_54541[10]);var state_54541__$1 = state_54541;var statearr_54557_54587 = state_54541__$1;(statearr_54557_54587[2] = inst_54513);
(statearr_54557_54587[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 12))
{var inst_54500 = (state_54541[9]);var inst_54516 = typeof inst_54500 === 'number';var state_54541__$1 = state_54541;var statearr_54558_54588 = state_54541__$1;(statearr_54558_54588[2] = inst_54516);
(statearr_54558_54588[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 13))
{var inst_54518 = (state_54541[2]);var state_54541__$1 = state_54541;if(cljs.core.truth_(inst_54518))
{var statearr_54559_54589 = state_54541__$1;(statearr_54559_54589[1] = 14);
} else
{var statearr_54560_54590 = state_54541__$1;(statearr_54560_54590[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 14))
{var inst_54493 = (state_54541[7]);var inst_54520 = (state_54541[11]);var inst_54500 = (state_54541[9]);var inst_54520__$1 = blog.responsive.core.handle_event.call(null,inst_54500,inst_54493,list);var state_54541__$1 = (function (){var statearr_54561 = state_54541;(statearr_54561[11] = inst_54520__$1);
return statearr_54561;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54541__$1,17,out,inst_54520__$1);
} else
{if((state_val_54542 === 15))
{var inst_54500 = (state_54541[9]);var state_54541__$1 = state_54541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54541__$1,18,out,inst_54500);
} else
{if((state_val_54542 === 16))
{var inst_54529 = (state_54541[2]);var state_54541__$1 = state_54541;var statearr_54563_54591 = state_54541__$1;(statearr_54563_54591[2] = inst_54529);
(statearr_54563_54591[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 17))
{var inst_54520 = (state_54541[11]);var inst_54522 = (state_54541[2]);var inst_54493 = inst_54520;var state_54541__$1 = (function (){var statearr_54564 = state_54541;(statearr_54564[12] = inst_54522);
(statearr_54564[7] = inst_54493);
return statearr_54564;
})();var statearr_54565_54592 = state_54541__$1;(statearr_54565_54592[2] = null);
(statearr_54565_54592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54542 === 18))
{var inst_54493 = (state_54541[7]);var inst_54526 = (state_54541[2]);var tmp54562 = inst_54493;var inst_54493__$1 = tmp54562;var state_54541__$1 = (function (){var statearr_54566 = state_54541;(statearr_54566[7] = inst_54493__$1);
(statearr_54566[13] = inst_54526);
return statearr_54566;
})();var statearr_54567_54593 = state_54541__$1;(statearr_54567_54593[2] = null);
(statearr_54567_54593[1] = 2);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_54571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54571[0] = state_machine__8407__auto__);
(statearr_54571[1] = 1);
return statearr_54571;
});
var state_machine__8407__auto____1 = (function (state_54541){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_54541);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e54572){if((e54572 instanceof Object))
{var ex__8410__auto__ = e54572;var statearr_54573_54594 = state_54541;(statearr_54573_54594[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54595 = state_54541;
state_54541 = G__54595;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_54541){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_54541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_54574 = f__8561__auto__.call(null);(statearr_54574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___54575);
return statearr_54574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
highlighter = function(in$,list,control){
switch(arguments.length){
case 2:
return highlighter__2.call(this,in$,list);
case 3:
return highlighter__3.call(this,in$,list,control);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
highlighter.cljs$core$IFn$_invoke$arity$2 = highlighter__2;
highlighter.cljs$core$IFn$_invoke$arity$3 = highlighter__3;
return highlighter;
})()
;
blog.responsive.core.selector = (function selector(in$,list,data){var out = cljs.core.async.chan.call(null);var c__8560__auto___54766 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_54727){var state_val_54728 = (state_54727[1]);if((state_val_54728 === 1))
{var inst_54681 = new cljs.core.Keyword("blog.responsive.core","none","blog.responsive.core/none",1985040514);var inst_54682 = new cljs.core.Keyword("blog.responsive.core","none","blog.responsive.core/none",1985040514);var state_54727__$1 = (function (){var statearr_54729 = state_54727;(statearr_54729[7] = inst_54681);
(statearr_54729[8] = inst_54682);
return statearr_54729;
})();var statearr_54730_54767 = state_54727__$1;(statearr_54730_54767[2] = null);
(statearr_54730_54767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 2))
{var state_54727__$1 = state_54727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54727__$1,4,in$);
} else
{if((state_val_54728 === 3))
{var inst_54725 = (state_54727[2]);var state_54727__$1 = state_54727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54727__$1,inst_54725);
} else
{if((state_val_54728 === 4))
{var inst_54685 = (state_54727[9]);var inst_54685__$1 = (state_54727[2]);var inst_54686 = cljs.core._EQ_.call(null,inst_54685__$1,new cljs.core.Keyword(null,"select","select",4402849902));var state_54727__$1 = (function (){var statearr_54731 = state_54727;(statearr_54731[9] = inst_54685__$1);
return statearr_54731;
})();if(inst_54686)
{var statearr_54732_54768 = state_54727__$1;(statearr_54732_54768[1] = 5);
} else
{var statearr_54733_54769 = state_54727__$1;(statearr_54733_54769[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 5))
{var inst_54682 = (state_54727[8]);var inst_54688 = typeof inst_54682 === 'number';var state_54727__$1 = state_54727;if(cljs.core.truth_(inst_54688))
{var statearr_54734_54770 = state_54727__$1;(statearr_54734_54770[1] = 8);
} else
{var statearr_54735_54771 = state_54727__$1;(statearr_54735_54771[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 6))
{var inst_54685 = (state_54727[9]);var state_54727__$1 = state_54727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54727__$1,16,out,inst_54685);
} else
{if((state_val_54728 === 7))
{var inst_54723 = (state_54727[2]);var state_54727__$1 = state_54727;var statearr_54736_54772 = state_54727__$1;(statearr_54736_54772[2] = inst_54723);
(statearr_54736_54772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 8))
{var inst_54682 = (state_54727[8]);var inst_54690 = blog.responsive.core._unselect_BANG_.call(null,list,inst_54682);var state_54727__$1 = state_54727;var statearr_54737_54773 = state_54727__$1;(statearr_54737_54773[2] = inst_54690);
(statearr_54737_54773[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 9))
{var state_54727__$1 = state_54727;var statearr_54738_54774 = state_54727__$1;(statearr_54738_54774[2] = null);
(statearr_54738_54774[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 10))
{var inst_54681 = (state_54727[7]);var inst_54693 = (state_54727[2]);var inst_54694 = typeof inst_54681 === 'number';var state_54727__$1 = (function (){var statearr_54739 = state_54727;(statearr_54739[10] = inst_54693);
return statearr_54739;
})();if(cljs.core.truth_(inst_54694))
{var statearr_54740_54775 = state_54727__$1;(statearr_54740_54775[1] = 11);
} else
{var statearr_54741_54776 = state_54727__$1;(statearr_54741_54776[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 11))
{var inst_54681 = (state_54727[7]);var inst_54696 = blog.responsive.core._select_BANG_.call(null,list,inst_54681);var inst_54697 = cljs.core.nth.call(null,data,inst_54681);var inst_54698 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_54697];var inst_54699 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_54698,null));var state_54727__$1 = (function (){var statearr_54743 = state_54727;(statearr_54743[11] = inst_54696);
return statearr_54743;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54727__$1,14,out,inst_54699);
} else
{if((state_val_54728 === 12))
{var inst_54681 = (state_54727[7]);var inst_54703 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_54681];var inst_54704 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_54703,null));var state_54727__$1 = state_54727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54727__$1,15,out,inst_54704);
} else
{if((state_val_54728 === 13))
{var inst_54681 = (state_54727[7]);var inst_54708 = (state_54727[2]);var tmp54742 = inst_54681;var inst_54681__$1 = tmp54742;var inst_54682 = tmp54742;var state_54727__$1 = (function (){var statearr_54744 = state_54727;(statearr_54744[7] = inst_54681__$1);
(statearr_54744[12] = inst_54708);
(statearr_54744[8] = inst_54682);
return statearr_54744;
})();var statearr_54745_54777 = state_54727__$1;(statearr_54745_54777[2] = null);
(statearr_54745_54777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 14))
{var inst_54701 = (state_54727[2]);var state_54727__$1 = state_54727;var statearr_54746_54778 = state_54727__$1;(statearr_54746_54778[2] = inst_54701);
(statearr_54746_54778[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 15))
{var inst_54706 = (state_54727[2]);var state_54727__$1 = state_54727;var statearr_54748_54779 = state_54727__$1;(statearr_54748_54779[2] = inst_54706);
(statearr_54748_54779[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 16))
{var inst_54685 = (state_54727[9]);var inst_54712 = (state_54727[2]);var inst_54713 = cljs.core._EQ_.call(null,inst_54685,new cljs.core.Keyword("blog.responsive.core","none","blog.responsive.core/none",1985040514));var inst_54714 = typeof inst_54685 === 'number';var inst_54715 = (inst_54713) || (inst_54714);var state_54727__$1 = (function (){var statearr_54751 = state_54727;(statearr_54751[13] = inst_54712);
return statearr_54751;
})();if(cljs.core.truth_(inst_54715))
{var statearr_54752_54780 = state_54727__$1;(statearr_54752_54780[1] = 17);
} else
{var statearr_54753_54781 = state_54727__$1;(statearr_54753_54781[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 17))
{var inst_54685 = (state_54727[9]);var inst_54682 = (state_54727[8]);var tmp54747 = inst_54682;var inst_54681 = inst_54685;var inst_54682__$1 = tmp54747;var state_54727__$1 = (function (){var statearr_54754 = state_54727;(statearr_54754[7] = inst_54681);
(statearr_54754[8] = inst_54682__$1);
return statearr_54754;
})();var statearr_54755_54782 = state_54727__$1;(statearr_54755_54782[2] = null);
(statearr_54755_54782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 18))
{var inst_54681 = (state_54727[7]);var inst_54682 = (state_54727[8]);var tmp54749 = inst_54681;var tmp54750 = inst_54682;var inst_54681__$1 = tmp54749;var inst_54682__$1 = tmp54750;var state_54727__$1 = (function (){var statearr_54756 = state_54727;(statearr_54756[7] = inst_54681__$1);
(statearr_54756[8] = inst_54682__$1);
return statearr_54756;
})();var statearr_54757_54783 = state_54727__$1;(statearr_54757_54783[2] = null);
(statearr_54757_54783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54728 === 19))
{var inst_54721 = (state_54727[2]);var state_54727__$1 = state_54727;var statearr_54758_54784 = state_54727__$1;(statearr_54758_54784[2] = inst_54721);
(statearr_54758_54784[1] = 7);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_54762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54762[0] = state_machine__8407__auto__);
(statearr_54762[1] = 1);
return statearr_54762;
});
var state_machine__8407__auto____1 = (function (state_54727){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_54727);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e54763){if((e54763 instanceof Object))
{var ex__8410__auto__ = e54763;var statearr_54764_54785 = state_54727;(statearr_54764_54785[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54786 = state_54727;
state_54727 = G__54786;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_54727){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_54727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_54765 = f__8561__auto__.call(null);(statearr_54765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___54766);
return statearr_54765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
blog.responsive.core.key_events = (function key_events(prevent_default_QMARK_){return blog.utils.reactive.map.call(null,blog.responsive.core.key__GT_keyword,blog.utils.reactive.filter.call(null,blog.responsive.core.KEYS,blog.utils.reactive.map.call(null,blog.responsive.core.key_event__GT_keycode,blog.utils.reactive.listen.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",4493897459),prevent_default_QMARK_))));
});
blog.responsive.core.create_example = (function create_example(id,event_fn,render_fn,ctor_fn){var hc = blog.utils.reactive.hover.call(null,blog.utils.dom.by_id.call(null,id));var prevent = cljs.core.atom.call(null,false);var raw = event_fn.call(null,((function (hc,prevent){
return (function (){return cljs.core.deref.call(null,prevent);
});})(hc,prevent))
);var c = blog.utils.reactive.toggle.call(null,raw);var changes = ctor_fn.call(null,new cljs.core.Keyword(null,"chan","chan",1016956612).cljs$core$IFn$_invoke$arity$1(c));var ctrl = new cljs.core.Keyword(null,"control","control",1965447375).cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(render_fn))
{render_fn.call(null);
} else
{}
var c__8560__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_54948){var state_val_54949 = (state_54948[1]);if((state_val_54949 === 1))
{var state_54948__$1 = state_54948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54948__$1,2,ctrl,false);
} else
{if((state_val_54949 === 2))
{var inst_54891 = (state_54948[2]);var inst_54892 = cljs.core.println.call(null,"changes!!");var state_54948__$1 = (function (){var statearr_54950 = state_54948;(statearr_54950[7] = inst_54892);
(statearr_54950[8] = inst_54891);
return statearr_54950;
})();var statearr_54951_54993 = state_54948__$1;(statearr_54951_54993[2] = null);
(statearr_54951_54993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 3))
{var state_54948__$1 = state_54948;if(true)
{var statearr_54952_54994 = state_54948__$1;(statearr_54952_54994[1] = 5);
} else
{var statearr_54953_54995 = state_54948__$1;(statearr_54953_54995[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 4))
{var inst_54946 = (state_54948[2]);var state_54948__$1 = state_54948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54948__$1,inst_54946);
} else
{if((state_val_54949 === 5))
{var state_54948__$1 = state_54948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54948__$1,8,hc);
} else
{if((state_val_54949 === 6))
{var state_54948__$1 = state_54948;var statearr_54954_54996 = state_54948__$1;(statearr_54954_54996[2] = null);
(statearr_54954_54996[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 7))
{var inst_54944 = (state_54948[2]);var state_54948__$1 = state_54948;var statearr_54955_54997 = state_54948__$1;(statearr_54955_54997[2] = inst_54944);
(statearr_54955_54997[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 8))
{var inst_54896 = (state_54948[2]);var inst_54897 = cljs.core._EQ_.call(null,inst_54896,new cljs.core.Keyword(null,"enter","enter",1110571594));var state_54948__$1 = state_54948;if(inst_54897)
{var statearr_54956_54998 = state_54948__$1;(statearr_54956_54998[1] = 9);
} else
{var statearr_54957_54999 = state_54948__$1;(statearr_54957_54999[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 9))
{var inst_54899 = cljs.core.println.call(null,"enter!!");var state_54948__$1 = (function (){var statearr_54958 = state_54948;(statearr_54958[9] = inst_54899);
return statearr_54958;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54948__$1,12,ctrl,true);
} else
{if((state_val_54949 === 10))
{var state_54948__$1 = state_54948;var statearr_54959_55000 = state_54948__$1;(statearr_54959_55000[2] = null);
(statearr_54959_55000[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 11))
{var inst_54940 = (state_54948[2]);var state_54948__$1 = (function (){var statearr_54960 = state_54948;(statearr_54960[10] = inst_54940);
return statearr_54960;
})();var statearr_54961_55001 = state_54948__$1;(statearr_54961_55001[2] = null);
(statearr_54961_55001[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 12))
{var inst_54901 = (state_54948[2]);var inst_54902 = cljs.core.reset_BANG_.call(null,prevent,true);var state_54948__$1 = (function (){var statearr_54962 = state_54948;(statearr_54962[11] = inst_54902);
(statearr_54962[12] = inst_54901);
return statearr_54962;
})();var statearr_54963_55002 = state_54948__$1;(statearr_54963_55002[2] = null);
(statearr_54963_55002[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 13))
{var inst_54905 = [hc,changes];var inst_54906 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_54905,null));var state_54948__$1 = state_54948;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54948__$1,15,inst_54906);
} else
{if((state_val_54949 === 14))
{var inst_54937 = (state_54948[2]);var state_54948__$1 = state_54948;var statearr_54964_55003 = state_54948__$1;(statearr_54964_55003[2] = inst_54937);
(statearr_54964_55003[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 15))
{var inst_54908 = (state_54948[2]);var inst_54909 = cljs.core.nth.call(null,inst_54908,0,null);var inst_54910 = cljs.core.nth.call(null,inst_54908,1,null);var inst_54911 = cljs.core._EQ_.call(null,inst_54909,new cljs.core.Keyword(null,"leave","leave",1116750377));var state_54948__$1 = (function (){var statearr_54965 = state_54948;(statearr_54965[13] = inst_54910);
return statearr_54965;
})();if(inst_54911)
{var statearr_54966_55004 = state_54948__$1;(statearr_54966_55004[1] = 16);
} else
{var statearr_54967_55005 = state_54948__$1;(statearr_54967_55005[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 16))
{var state_54948__$1 = state_54948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54948__$1,19,ctrl,false);
} else
{if((state_val_54949 === 17))
{var inst_54910 = (state_54948[13]);var inst_54917 = cljs.core._EQ_.call(null,inst_54910,changes);var state_54948__$1 = state_54948;if(inst_54917)
{var statearr_54968_55006 = state_54948__$1;(statearr_54968_55006[1] = 20);
} else
{var statearr_54969_55007 = state_54948__$1;(statearr_54969_55007[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 18))
{var inst_54935 = (state_54948[2]);var state_54948__$1 = state_54948;var statearr_54970_55008 = state_54948__$1;(statearr_54970_55008[2] = inst_54935);
(statearr_54970_55008[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 19))
{var inst_54914 = (state_54948[2]);var inst_54915 = cljs.core.reset_BANG_.call(null,prevent,false);var state_54948__$1 = (function (){var statearr_54971 = state_54948;(statearr_54971[14] = inst_54914);
return statearr_54971;
})();var statearr_54972_55009 = state_54948__$1;(statearr_54972_55009[2] = inst_54915);
(statearr_54972_55009[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 20))
{var inst_54919 = cljs.core.println.call(null,"changes2!!");var state_54948__$1 = (function (){var statearr_54973 = state_54948;(statearr_54973[15] = inst_54919);
return statearr_54973;
})();if(cljs.core.truth_(render_fn))
{var statearr_54974_55010 = state_54948__$1;(statearr_54974_55010[1] = 23);
} else
{var statearr_54975_55011 = state_54948__$1;(statearr_54975_55011[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 21))
{var state_54948__$1 = state_54948;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_54976_55012 = state_54948__$1;(statearr_54976_55012[1] = 26);
} else
{var statearr_54977_55013 = state_54948__$1;(statearr_54977_55013[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 22))
{var inst_54933 = (state_54948[2]);var state_54948__$1 = state_54948;var statearr_54978_55014 = state_54948__$1;(statearr_54978_55014[2] = inst_54933);
(statearr_54978_55014[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 23))
{var inst_54921 = render_fn.call(null);var state_54948__$1 = state_54948;var statearr_54979_55015 = state_54948__$1;(statearr_54979_55015[2] = inst_54921);
(statearr_54979_55015[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 24))
{var state_54948__$1 = state_54948;var statearr_54980_55016 = state_54948__$1;(statearr_54980_55016[2] = null);
(statearr_54980_55016[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 25))
{var inst_54924 = (state_54948[2]);var state_54948__$1 = (function (){var statearr_54981 = state_54948;(statearr_54981[16] = inst_54924);
return statearr_54981;
})();var statearr_54982_55017 = state_54948__$1;(statearr_54982_55017[2] = null);
(statearr_54982_55017[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 26))
{var state_54948__$1 = state_54948;var statearr_54983_55018 = state_54948__$1;(statearr_54983_55018[2] = null);
(statearr_54983_55018[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 27))
{var state_54948__$1 = state_54948;var statearr_54984_55019 = state_54948__$1;(statearr_54984_55019[2] = null);
(statearr_54984_55019[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54949 === 28))
{var inst_54931 = (state_54948[2]);var state_54948__$1 = state_54948;var statearr_54985_55020 = state_54948__$1;(statearr_54985_55020[2] = inst_54931);
(statearr_54985_55020[1] = 22);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_54989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54989[0] = state_machine__8407__auto__);
(statearr_54989[1] = 1);
return statearr_54989;
});
var state_machine__8407__auto____1 = (function (state_54948){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_54948);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e54990){if((e54990 instanceof Object))
{var ex__8410__auto__ = e54990;var statearr_54991_55021 = state_54948;(statearr_54991_55021[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55022 = state_54948;
state_54948 = G__55022;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_54948){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_54948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_54992 = f__8561__auto__.call(null);(statearr_54992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto__);
return statearr_54992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return c__8560__auto__;
});
blog.responsive.core.set_char_BANG_ = (function set_char_BANG_(s,i,c){return [cljs.core.str(s.substring(0,i)),cljs.core.str(c),cljs.core.str(s.substring((i + 1)))].join('');
});
(blog.responsive.core.ISelectable["array"] = true);
(blog.responsive.core._select_BANG_["array"] = (function (list,n){return (list[n] = blog.responsive.core.set_char_BANG_.call(null,(list[n]),1,"*"));
}));
(blog.responsive.core._unselect_BANG_["array"] = (function (list,n){return (list[n] = blog.responsive.core.set_char_BANG_.call(null,(list[n]),1," "));
}));
(blog.responsive.core.IHighlightable["array"] = true);
(blog.responsive.core._highlight_BANG_["array"] = (function (list,n){return (list[n] = blog.responsive.core.set_char_BANG_.call(null,(list[n]),0,">"));
}));
(blog.responsive.core._unhighlight_BANG_["array"] = (function (list,n){return (list[n] = blog.responsive.core.set_char_BANG_.call(null,(list[n]),0," "));
}));
if(cljs.core.truth_(blog.utils.dom.by_id.call(null,"ex0")))
{var ui_55023 = ["   Alan Kay","   J.C.R. Licklider","   John McCarthy"];blog.responsive.core.create_example.call(null,"ex0",blog.responsive.core.key_events,(function (){return blog.utils.dom.set_text_BANG_.call(null,blog.utils.dom.by_id.call(null,"ex0-ui"),ui_55023.join("\n"));
}),(function (events){return blog.responsive.core.highlighter.call(null,events,ui_55023);
}));
} else
{}
if(cljs.core.truth_(blog.utils.dom.by_id.call(null,"ex1")))
{var ui_55024 = ["   Smalltalk","   Lisp","   Prolog","   ML"];blog.responsive.core.create_example.call(null,"ex1",blog.responsive.core.key_events,(function (){return blog.utils.dom.set_text_BANG_.call(null,blog.utils.dom.by_id.call(null,"ex1-ui"),ui_55024.join("\n"));
}),(function (events){return blog.responsive.core.selector.call(null,blog.responsive.core.highlighter.call(null,events,ui_55024),ui_55024,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["smalltalk","lisp","prolog","ml"], null));
}));
} else
{}
blog.responsive.core.ex2_events = (function ex2_events(ui,prevent){return blog.utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.responsive.core.key_events.call(null,prevent),blog.utils.reactive.hover_child.call(null,ui,"li"),blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"select","select",4402849902)),blog.utils.reactive.listen.call(null,ui,new cljs.core.Keyword(null,"click","click",1108654330)))], null));
});
HTMLUListElement.prototype.blog$responsive$core$ISelectable$ = true;
HTMLUListElement.prototype.blog$responsive$core$ISelectable$_select_BANG_$arity$2 = (function (list,n){var list__$1 = this;return blog.utils.dom.add_class_BANG_.call(null,cljs.core.nth.call(null,blog.utils.dom.by_tag_name.call(null,list__$1,"li"),n),"selected");
});
HTMLUListElement.prototype.blog$responsive$core$ISelectable$_unselect_BANG_$arity$2 = (function (list,n){var list__$1 = this;return blog.utils.dom.remove_class_BANG_.call(null,cljs.core.nth.call(null,blog.utils.dom.by_tag_name.call(null,list__$1,"li"),n),"selected");
});
HTMLUListElement.prototype.blog$responsive$core$IHighlightable$ = true;
HTMLUListElement.prototype.blog$responsive$core$IHighlightable$_highlight_BANG_$arity$2 = (function (list,n){var list__$1 = this;return blog.utils.dom.add_class_BANG_.call(null,cljs.core.nth.call(null,blog.utils.dom.by_tag_name.call(null,list__$1,"li"),n),"highlighted");
});
HTMLUListElement.prototype.blog$responsive$core$IHighlightable$_unhighlight_BANG_$arity$2 = (function (list,n){var list__$1 = this;return blog.utils.dom.remove_class_BANG_.call(null,cljs.core.nth.call(null,blog.utils.dom.by_tag_name.call(null,list__$1,"li"),n),"highlighted");
});
HTMLUListElement.prototype.cljs$core$ICounted$ = true;
HTMLUListElement.prototype.cljs$core$ICounted$_count$arity$1 = (function (list){var list__$1 = this;return cljs.core.count.call(null,blog.utils.dom.by_tag_name.call(null,list__$1,"li"));
});
if(cljs.core.truth_(blog.utils.dom.by_id.call(null,"ex2-list")))
{var ui_55025 = blog.utils.dom.by_id.call(null,"ex2-list");blog.responsive.core.create_example.call(null,"ex2",(function (prevent){return blog.responsive.core.ex2_events.call(null,ui_55025,prevent);
}),null,(function (events){return blog.responsive.core.selector.call(null,blog.responsive.core.highlighter.call(null,events,ui_55025),ui_55025,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pynchon","proust","faulkner","melville"], null));
}));
} else
{}
