// Compiled by ClojureScript 0.0-2138
goog.provide('blog.csp.core');
goog.require('cljs.core');
goog.require('blog.utils.reactive');
goog.require('blog.utils.dom');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('blog.utils.reactive');
goog.require('blog.utils.dom');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
blog.csp.core.c = cljs.core.async.chan.call(null);
blog.csp.core.render = (function render(q){return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4142__auto__ = (function iter__18564(s__18565){return (new cljs.core.LazySeq(null,(function (){var s__18565__$1 = s__18565;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18565__$1);if(temp__4092__auto__)
{var s__18565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18565__$2))
{var c__4140__auto__ = cljs.core.chunk_first.call(null,s__18565__$2);var size__4141__auto__ = cljs.core.count.call(null,c__4140__auto__);var b__18567 = cljs.core.chunk_buffer.call(null,size__4141__auto__);if((function (){var i__18566 = 0;while(true){
if((i__18566 < size__4141__auto__))
{var p = cljs.core._nth.call(null,c__4140__auto__,i__18566);cljs.core.chunk_append.call(null,b__18567,[cljs.core.str("<div class='proc-"),cljs.core.str(p),cljs.core.str("'>Process "),cljs.core.str(p),cljs.core.str("</div>")].join(''));
{
var G__18568 = (i__18566 + 1);
i__18566 = G__18568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18567),iter__18564.call(null,cljs.core.chunk_rest.call(null,s__18565__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18567),null);
}
} else
{var p = cljs.core.first.call(null,s__18565__$2);return cljs.core.cons.call(null,[cljs.core.str("<div class='proc-"),cljs.core.str(p),cljs.core.str("'>Process "),cljs.core.str(p),cljs.core.str("</div>")].join(''),iter__18564.call(null,cljs.core.rest.call(null,s__18565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4142__auto__.call(null,cljs.core.reverse.call(null,q));
})());
});
var c__5546__auto___18600 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18583){var state_val_18584 = (state_18583[1]);if((state_val_18584 === 8))
{var inst_18575 = (state_18583[2]);var state_18583__$1 = (function (){var statearr_18585 = state_18583;(statearr_18585[7] = inst_18575);
return statearr_18585;
})();var statearr_18586_18601 = state_18583__$1;(statearr_18586_18601[2] = null);
(statearr_18586_18601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18584 === 7))
{var inst_18573 = (state_18583[2]);var state_18583__$1 = (function (){var statearr_18587 = state_18583;(statearr_18587[8] = inst_18573);
return statearr_18587;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18583__$1,8,blog.csp.core.c,1);
} else
{if((state_val_18584 === 6))
{var inst_18579 = (state_18583[2]);var state_18583__$1 = state_18583;var statearr_18588_18602 = state_18583__$1;(statearr_18588_18602[2] = inst_18579);
(statearr_18588_18602[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18584 === 5))
{var state_18583__$1 = state_18583;var statearr_18589_18603 = state_18583__$1;(statearr_18589_18603[2] = null);
(statearr_18589_18603[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18584 === 4))
{var inst_18571 = cljs.core.async.timeout.call(null,250);var state_18583__$1 = state_18583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18583__$1,7,inst_18571);
} else
{if((state_val_18584 === 3))
{var inst_18581 = (state_18583[2]);var state_18583__$1 = state_18583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18583__$1,inst_18581);
} else
{if((state_val_18584 === 2))
{var state_18583__$1 = state_18583;if(true)
{var statearr_18590_18604 = state_18583__$1;(statearr_18590_18604[1] = 4);
} else
{var statearr_18591_18605 = state_18583__$1;(statearr_18591_18605[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18584 === 1))
{var state_18583__$1 = state_18583;var statearr_18592_18606 = state_18583__$1;(statearr_18592_18606[2] = null);
(statearr_18592_18606[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_18596 = [null,null,null,null,null,null,null,null,null];(statearr_18596[0] = state_machine__5532__auto__);
(statearr_18596[1] = 1);
return statearr_18596;
});
var state_machine__5532__auto____1 = (function (state_18583){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18583);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18597){if((e18597 instanceof Object))
{var ex__5535__auto__ = e18597;var statearr_18598_18607 = state_18583;(statearr_18598_18607[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18608 = state_18583;
state_18583 = G__18608;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18583){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18599 = f__5547__auto__.call(null);(statearr_18599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___18600);
return statearr_18599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
var c__5546__auto___18640 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18623){var state_val_18624 = (state_18623[1]);if((state_val_18624 === 8))
{var inst_18615 = (state_18623[2]);var state_18623__$1 = (function (){var statearr_18625 = state_18623;(statearr_18625[7] = inst_18615);
return statearr_18625;
})();var statearr_18626_18641 = state_18623__$1;(statearr_18626_18641[2] = null);
(statearr_18626_18641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18624 === 7))
{var inst_18613 = (state_18623[2]);var state_18623__$1 = (function (){var statearr_18627 = state_18623;(statearr_18627[8] = inst_18613);
return statearr_18627;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18623__$1,8,blog.csp.core.c,2);
} else
{if((state_val_18624 === 6))
{var inst_18619 = (state_18623[2]);var state_18623__$1 = state_18623;var statearr_18628_18642 = state_18623__$1;(statearr_18628_18642[2] = inst_18619);
(statearr_18628_18642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18624 === 5))
{var state_18623__$1 = state_18623;var statearr_18629_18643 = state_18623__$1;(statearr_18629_18643[2] = null);
(statearr_18629_18643[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18624 === 4))
{var inst_18611 = cljs.core.async.timeout.call(null,1000);var state_18623__$1 = state_18623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18623__$1,7,inst_18611);
} else
{if((state_val_18624 === 3))
{var inst_18621 = (state_18623[2]);var state_18623__$1 = state_18623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18623__$1,inst_18621);
} else
{if((state_val_18624 === 2))
{var state_18623__$1 = state_18623;if(true)
{var statearr_18630_18644 = state_18623__$1;(statearr_18630_18644[1] = 4);
} else
{var statearr_18631_18645 = state_18623__$1;(statearr_18631_18645[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18624 === 1))
{var state_18623__$1 = state_18623;var statearr_18632_18646 = state_18623__$1;(statearr_18632_18646[2] = null);
(statearr_18632_18646[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_18636 = [null,null,null,null,null,null,null,null,null];(statearr_18636[0] = state_machine__5532__auto__);
(statearr_18636[1] = 1);
return statearr_18636;
});
var state_machine__5532__auto____1 = (function (state_18623){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18623);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18637){if((e18637 instanceof Object))
{var ex__5535__auto__ = e18637;var statearr_18638_18647 = state_18623;(statearr_18638_18647[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18623);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18648 = state_18623;
state_18623 = G__18648;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18623){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18639 = f__5547__auto__.call(null);(statearr_18639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___18640);
return statearr_18639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
var c__5546__auto___18680 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18663){var state_val_18664 = (state_18663[1]);if((state_val_18664 === 8))
{var inst_18655 = (state_18663[2]);var state_18663__$1 = (function (){var statearr_18665 = state_18663;(statearr_18665[7] = inst_18655);
return statearr_18665;
})();var statearr_18666_18681 = state_18663__$1;(statearr_18666_18681[2] = null);
(statearr_18666_18681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18664 === 7))
{var inst_18653 = (state_18663[2]);var state_18663__$1 = (function (){var statearr_18667 = state_18663;(statearr_18667[8] = inst_18653);
return statearr_18667;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18663__$1,8,blog.csp.core.c,3);
} else
{if((state_val_18664 === 6))
{var inst_18659 = (state_18663[2]);var state_18663__$1 = state_18663;var statearr_18668_18682 = state_18663__$1;(statearr_18668_18682[2] = inst_18659);
(statearr_18668_18682[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18664 === 5))
{var state_18663__$1 = state_18663;var statearr_18669_18683 = state_18663__$1;(statearr_18669_18683[2] = null);
(statearr_18669_18683[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18664 === 4))
{var inst_18651 = cljs.core.async.timeout.call(null,1500);var state_18663__$1 = state_18663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18663__$1,7,inst_18651);
} else
{if((state_val_18664 === 3))
{var inst_18661 = (state_18663[2]);var state_18663__$1 = state_18663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18663__$1,inst_18661);
} else
{if((state_val_18664 === 2))
{var state_18663__$1 = state_18663;if(true)
{var statearr_18670_18684 = state_18663__$1;(statearr_18670_18684[1] = 4);
} else
{var statearr_18671_18685 = state_18663__$1;(statearr_18671_18685[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18664 === 1))
{var state_18663__$1 = state_18663;var statearr_18672_18686 = state_18663__$1;(statearr_18672_18686[2] = null);
(statearr_18672_18686[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_18676 = [null,null,null,null,null,null,null,null,null];(statearr_18676[0] = state_machine__5532__auto__);
(statearr_18676[1] = 1);
return statearr_18676;
});
var state_machine__5532__auto____1 = (function (state_18663){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18677){if((e18677 instanceof Object))
{var ex__5535__auto__ = e18677;var statearr_18678_18687 = state_18663;(statearr_18678_18687[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18688 = state_18663;
state_18663 = G__18688;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18663){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18679 = f__5547__auto__.call(null);(statearr_18679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___18680);
return statearr_18679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
/**
* Returns vector of (up to) n items from the end of vector v
*/
blog.csp.core.peekn = (function peekn(v,n){if((cljs.core.count.call(null,v) > n))
{return cljs.core.subvec.call(null,v,(cljs.core.count.call(null,v) - n));
} else
{return v;
}
});
var el_18715 = blog.utils.dom.by_id.call(null,"ex0");var out_18716 = blog.utils.dom.by_id.call(null,"ex0-out");var c__5546__auto___18717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18701){var state_val_18702 = (state_18701[1]);if((state_val_18702 === 4))
{var inst_18689 = (state_18701[7]);var inst_18694 = (state_18701[2]);var inst_18695 = cljs.core.conj.call(null,inst_18689,inst_18694);var inst_18696 = blog.csp.core.peekn.call(null,inst_18695,10);var inst_18689__$1 = inst_18696;var state_18701__$1 = (function (){var statearr_18703 = state_18701;(statearr_18703[7] = inst_18689__$1);
return statearr_18703;
})();var statearr_18704_18718 = state_18701__$1;(statearr_18704_18718[2] = null);
(statearr_18704_18718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18702 === 3))
{var inst_18699 = (state_18701[2]);var state_18701__$1 = state_18701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18701__$1,inst_18699);
} else
{if((state_val_18702 === 2))
{var inst_18689 = (state_18701[7]);var inst_18691 = blog.csp.core.render.call(null,inst_18689);var inst_18692 = blog.utils.dom.set_html_BANG_.call(null,out_18716,inst_18691);var state_18701__$1 = (function (){var statearr_18705 = state_18701;(statearr_18705[8] = inst_18692);
return statearr_18705;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18701__$1,4,blog.csp.core.c);
} else
{if((state_val_18702 === 1))
{var inst_18689 = cljs.core.PersistentVector.EMPTY;var state_18701__$1 = (function (){var statearr_18706 = state_18701;(statearr_18706[7] = inst_18689);
return statearr_18706;
})();var statearr_18707_18719 = state_18701__$1;(statearr_18707_18719[2] = null);
(statearr_18707_18719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_18711 = [null,null,null,null,null,null,null,null,null];(statearr_18711[0] = state_machine__5532__auto__);
(statearr_18711[1] = 1);
return statearr_18711;
});
var state_machine__5532__auto____1 = (function (state_18701){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18701);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18712){if((e18712 instanceof Object))
{var ex__5535__auto__ = e18712;var statearr_18713_18720 = state_18701;(statearr_18713_18720[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18701);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18721 = state_18701;
state_18701 = G__18721;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18701){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18714 = f__5547__auto__.call(null);(statearr_18714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___18717);
return statearr_18714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
var el_18753 = blog.utils.dom.by_id.call(null,"ex1");var out_18754 = blog.utils.dom.by_id.call(null,"ex1-mouse");var c_18755 = blog.utils.reactive.listen.call(null,el_18753,new cljs.core.Keyword(null,"mousemove","mousemove",1601016168));var c__5546__auto___18756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18737){var state_val_18738 = (state_18737[1]);if((state_val_18738 === 7))
{var inst_18725 = (state_18737[2]);var inst_18726 = inst_18725.offsetX;var inst_18727 = inst_18725.offsetY;var inst_18728 = [cljs.core.str(inst_18726),cljs.core.str(", "),cljs.core.str(inst_18727)].join('');var inst_18729 = blog.utils.dom.set_html_BANG_.call(null,out_18754,inst_18728);var state_18737__$1 = (function (){var statearr_18739 = state_18737;(statearr_18739[7] = inst_18729);
return statearr_18739;
})();var statearr_18740_18757 = state_18737__$1;(statearr_18740_18757[2] = null);
(statearr_18740_18757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18738 === 6))
{var inst_18733 = (state_18737[2]);var state_18737__$1 = state_18737;var statearr_18741_18758 = state_18737__$1;(statearr_18741_18758[2] = inst_18733);
(statearr_18741_18758[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18738 === 5))
{var state_18737__$1 = state_18737;var statearr_18742_18759 = state_18737__$1;(statearr_18742_18759[2] = null);
(statearr_18742_18759[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18738 === 4))
{var state_18737__$1 = state_18737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18737__$1,7,c_18755);
} else
{if((state_val_18738 === 3))
{var inst_18735 = (state_18737[2]);var state_18737__$1 = state_18737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18737__$1,inst_18735);
} else
{if((state_val_18738 === 2))
{var state_18737__$1 = state_18737;if(true)
{var statearr_18743_18760 = state_18737__$1;(statearr_18743_18760[1] = 4);
} else
{var statearr_18744_18761 = state_18737__$1;(statearr_18744_18761[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18738 === 1))
{var state_18737__$1 = state_18737;var statearr_18745_18762 = state_18737__$1;(statearr_18745_18762[2] = null);
(statearr_18745_18762[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_18749 = [null,null,null,null,null,null,null,null];(statearr_18749[0] = state_machine__5532__auto__);
(statearr_18749[1] = 1);
return statearr_18749;
});
var state_machine__5532__auto____1 = (function (state_18737){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18750){if((e18750 instanceof Object))
{var ex__5535__auto__ = e18750;var statearr_18751_18763 = state_18737;(statearr_18751_18763[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18764 = state_18737;
state_18737 = G__18764;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18737){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18752 = f__5547__auto__.call(null);(statearr_18752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___18756);
return statearr_18752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
blog.csp.core.location = (function location__$1(el){var vec__18766 = cljs.core.map.call(null,cljs.core.int$,blog.utils.dom.offset.call(null,el));var left = cljs.core.nth.call(null,vec__18766,0,null);var top = cljs.core.nth.call(null,vec__18766,1,null);return (function (e){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(e.offsetX + left),new cljs.core.Keyword(null,"y","y",1013904363),(e.offsetY + top)], null);
});
});
var el_18798 = blog.utils.dom.by_id.call(null,"ex2");var out_18799 = blog.utils.dom.by_id.call(null,"ex2-mouse");var c_18800 = blog.utils.reactive.map.call(null,blog.csp.core.location.call(null,el_18798),blog.utils.reactive.listen.call(null,el_18798,new cljs.core.Keyword(null,"mousemove","mousemove",1601016168)));var c__5546__auto___18801 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18782){var state_val_18783 = (state_18782[1]);if((state_val_18783 === 7))
{var inst_18770 = (state_18782[2]);var inst_18771 = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(inst_18770);var inst_18772 = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(inst_18770);var inst_18773 = [cljs.core.str(inst_18771),cljs.core.str(", "),cljs.core.str(inst_18772)].join('');var inst_18774 = blog.utils.dom.set_html_BANG_.call(null,out_18799,inst_18773);var state_18782__$1 = (function (){var statearr_18784 = state_18782;(statearr_18784[7] = inst_18774);
return statearr_18784;
})();var statearr_18785_18802 = state_18782__$1;(statearr_18785_18802[2] = null);
(statearr_18785_18802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18783 === 6))
{var inst_18778 = (state_18782[2]);var state_18782__$1 = state_18782;var statearr_18786_18803 = state_18782__$1;(statearr_18786_18803[2] = inst_18778);
(statearr_18786_18803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18783 === 5))
{var state_18782__$1 = state_18782;var statearr_18787_18804 = state_18782__$1;(statearr_18787_18804[2] = null);
(statearr_18787_18804[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18783 === 4))
{var state_18782__$1 = state_18782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18782__$1,7,c_18800);
} else
{if((state_val_18783 === 3))
{var inst_18780 = (state_18782[2]);var state_18782__$1 = state_18782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18782__$1,inst_18780);
} else
{if((state_val_18783 === 2))
{var state_18782__$1 = state_18782;if(true)
{var statearr_18788_18805 = state_18782__$1;(statearr_18788_18805[1] = 4);
} else
{var statearr_18789_18806 = state_18782__$1;(statearr_18789_18806[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18783 === 1))
{var state_18782__$1 = state_18782;var statearr_18790_18807 = state_18782__$1;(statearr_18790_18807[2] = null);
(statearr_18790_18807[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_18794 = [null,null,null,null,null,null,null,null];(statearr_18794[0] = state_machine__5532__auto__);
(statearr_18794[1] = 1);
return statearr_18794;
});
var state_machine__5532__auto____1 = (function (state_18782){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18795){if((e18795 instanceof Object))
{var ex__5535__auto__ = e18795;var statearr_18796_18808 = state_18782;(statearr_18796_18808[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18809 = state_18782;
state_18782 = G__18809;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18782){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18797 = f__5547__auto__.call(null);(statearr_18797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___18801);
return statearr_18797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
var el_18874 = blog.utils.dom.by_id.call(null,"ex3");var outm_18875 = blog.utils.dom.by_id.call(null,"ex3-mouse");var outk_18876 = blog.utils.dom.by_id.call(null,"ex3-key");var mc_18877 = blog.utils.reactive.map.call(null,blog.csp.core.location.call(null,el_18874),blog.utils.reactive.listen.call(null,el_18874,new cljs.core.Keyword(null,"mousemove","mousemove",1601016168)));var kc_18878 = blog.utils.reactive.listen.call(null,document,new cljs.core.Keyword(null,"keypress","keypress",1530666166));var c__5546__auto___18879 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18849){var state_val_18850 = (state_18849[1]);if((state_val_18850 === 1))
{var state_18849__$1 = state_18849;var statearr_18851_18880 = state_18849__$1;(statearr_18851_18880[2] = null);
(statearr_18851_18880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 2))
{var state_18849__$1 = state_18849;if(true)
{var statearr_18852_18881 = state_18849__$1;(statearr_18852_18881[1] = 4);
} else
{var statearr_18853_18882 = state_18849__$1;(statearr_18853_18882[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 3))
{var inst_18847 = (state_18849[2]);var state_18849__$1 = state_18849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18849__$1,inst_18847);
} else
{if((state_val_18850 === 4))
{var inst_18813 = [mc_18877,kc_18878];var inst_18814 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18813,null));var state_18849__$1 = state_18849;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18849__$1,7,inst_18814);
} else
{if((state_val_18850 === 5))
{var state_18849__$1 = state_18849;var statearr_18854_18883 = state_18849__$1;(statearr_18854_18883[2] = null);
(statearr_18854_18883[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 6))
{var inst_18845 = (state_18849[2]);var state_18849__$1 = state_18849;var statearr_18855_18884 = state_18849__$1;(statearr_18855_18884[2] = inst_18845);
(statearr_18855_18884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 7))
{var inst_18818 = (state_18849[7]);var inst_18816 = (state_18849[2]);var inst_18817 = cljs.core.nth.call(null,inst_18816,0,null);var inst_18818__$1 = cljs.core.nth.call(null,inst_18816,1,null);var inst_18822 = cljs.core._EQ_.call(null,mc_18877,inst_18818__$1);var state_18849__$1 = (function (){var statearr_18856 = state_18849;(statearr_18856[8] = inst_18817);
(statearr_18856[7] = inst_18818__$1);
return statearr_18856;
})();if(inst_18822)
{var statearr_18857_18885 = state_18849__$1;(statearr_18857_18885[1] = 8);
} else
{var statearr_18858_18886 = state_18849__$1;(statearr_18858_18886[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 8))
{var inst_18817 = (state_18849[8]);var inst_18824 = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(inst_18817);var inst_18825 = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(inst_18817);var inst_18826 = [cljs.core.str(inst_18824),cljs.core.str(", "),cljs.core.str(inst_18825)].join('');var inst_18827 = blog.utils.dom.set_html_BANG_.call(null,outm_18875,inst_18826);var state_18849__$1 = state_18849;var statearr_18859_18887 = state_18849__$1;(statearr_18859_18887[2] = inst_18827);
(statearr_18859_18887[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 9))
{var inst_18818 = (state_18849[7]);var inst_18829 = cljs.core._EQ_.call(null,kc_18878,inst_18818);var state_18849__$1 = state_18849;if(inst_18829)
{var statearr_18860_18888 = state_18849__$1;(statearr_18860_18888[1] = 11);
} else
{var statearr_18861_18889 = state_18849__$1;(statearr_18861_18889[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 10))
{var inst_18841 = (state_18849[2]);var state_18849__$1 = (function (){var statearr_18862 = state_18849;(statearr_18862[9] = inst_18841);
return statearr_18862;
})();var statearr_18863_18890 = state_18849__$1;(statearr_18863_18890[2] = null);
(statearr_18863_18890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 11))
{var inst_18817 = (state_18849[8]);var inst_18831 = inst_18817.charCode;var inst_18832 = [cljs.core.str(inst_18831)].join('');var inst_18833 = blog.utils.dom.set_html_BANG_.call(null,outk_18876,inst_18832);var state_18849__$1 = state_18849;var statearr_18864_18891 = state_18849__$1;(statearr_18864_18891[2] = inst_18833);
(statearr_18864_18891[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 12))
{var inst_18818 = (state_18849[7]);var inst_18835 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_18818)].join('');var inst_18836 = (new Error(inst_18835));var inst_18837 = (function(){throw inst_18836})();var state_18849__$1 = state_18849;var statearr_18865_18892 = state_18849__$1;(statearr_18865_18892[2] = inst_18837);
(statearr_18865_18892[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18850 === 13))
{var inst_18839 = (state_18849[2]);var state_18849__$1 = state_18849;var statearr_18866_18893 = state_18849__$1;(statearr_18866_18893[2] = inst_18839);
(statearr_18866_18893[1] = 10);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_18870 = [null,null,null,null,null,null,null,null,null,null];(statearr_18870[0] = state_machine__5532__auto__);
(statearr_18870[1] = 1);
return statearr_18870;
});
var state_machine__5532__auto____1 = (function (state_18849){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18849);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18871){if((e18871 instanceof Object))
{var ex__5535__auto__ = e18871;var statearr_18872_18894 = state_18849;(statearr_18872_18894[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18895 = state_18849;
state_18849 = G__18895;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18849){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18873 = f__5547__auto__.call(null);(statearr_18873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___18879);
return statearr_18873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
blog.csp.core.fake_search = (function fake_search(kind){return (function (c,query){var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_18924){var state_val_18925 = (state_18924[1]);if((state_val_18925 === 3))
{var inst_18922 = (state_18924[2]);var state_18924__$1 = state_18924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18924__$1,inst_18922);
} else
{if((state_val_18925 === 2))
{var inst_18918 = (state_18924[2]);var inst_18919 = [kind,query];var inst_18920 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18919,null));var state_18924__$1 = (function (){var statearr_18926 = state_18924;(statearr_18926[7] = inst_18918);
return statearr_18926;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18924__$1,3,c,inst_18920);
} else
{if((state_val_18925 === 1))
{var inst_18915 = cljs.core.rand_int.call(null,100);var inst_18916 = cljs.core.async.timeout.call(null,inst_18915);var state_18924__$1 = state_18924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18924__$1,2,inst_18916);
} else
{return null;
}
}
}
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_18930 = [null,null,null,null,null,null,null,null];(statearr_18930[0] = state_machine__5532__auto__);
(statearr_18930[1] = 1);
return statearr_18930;
});
var state_machine__5532__auto____1 = (function (state_18924){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_18924);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e18931){if((e18931 instanceof Object))
{var ex__5535__auto__ = e18931;var statearr_18932_18934 = state_18924;(statearr_18932_18934[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18935 = state_18924;
state_18924 = G__18935;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_18924){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_18924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_18933 = f__5547__auto__.call(null);(statearr_18933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_18933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return c__5546__auto__;
});
});
blog.csp.core.web1 = blog.csp.core.fake_search.call(null,new cljs.core.Keyword(null,"web1","web1",1017549519));
blog.csp.core.web2 = blog.csp.core.fake_search.call(null,new cljs.core.Keyword(null,"web2","web2",1017549520));
blog.csp.core.image1 = blog.csp.core.fake_search.call(null,new cljs.core.Keyword(null,"image1","image1",4123620776));
blog.csp.core.image2 = blog.csp.core.fake_search.call(null,new cljs.core.Keyword(null,"image2","image2",4123620777));
blog.csp.core.video1 = blog.csp.core.fake_search.call(null,new cljs.core.Keyword(null,"video1","video1",4492193416));
blog.csp.core.video2 = blog.csp.core.fake_search.call(null,new cljs.core.Keyword(null,"video2","video2",4492193417));
/**
* @param {...*} var_args
*/
blog.csp.core.fastest = (function() { 
var fastest__delegate = function (query,replicas){var c = cljs.core.async.chan.call(null);var seq__18940_18944 = cljs.core.seq.call(null,replicas);var chunk__18941_18945 = null;var count__18942_18946 = 0;var i__18943_18947 = 0;while(true){
if((i__18943_18947 < count__18942_18946))
{var replica_18948 = cljs.core._nth.call(null,chunk__18941_18945,i__18943_18947);replica_18948.call(null,c,query);
{
var G__18949 = seq__18940_18944;
var G__18950 = chunk__18941_18945;
var G__18951 = count__18942_18946;
var G__18952 = (i__18943_18947 + 1);
seq__18940_18944 = G__18949;
chunk__18941_18945 = G__18950;
count__18942_18946 = G__18951;
i__18943_18947 = G__18952;
continue;
}
} else
{var temp__4092__auto___18953 = cljs.core.seq.call(null,seq__18940_18944);if(temp__4092__auto___18953)
{var seq__18940_18954__$1 = temp__4092__auto___18953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18940_18954__$1))
{var c__4173__auto___18955 = cljs.core.chunk_first.call(null,seq__18940_18954__$1);{
var G__18956 = cljs.core.chunk_rest.call(null,seq__18940_18954__$1);
var G__18957 = c__4173__auto___18955;
var G__18958 = cljs.core.count.call(null,c__4173__auto___18955);
var G__18959 = 0;
seq__18940_18944 = G__18956;
chunk__18941_18945 = G__18957;
count__18942_18946 = G__18958;
i__18943_18947 = G__18959;
continue;
}
} else
{var replica_18960 = cljs.core.first.call(null,seq__18940_18954__$1);replica_18960.call(null,c,query);
{
var G__18961 = cljs.core.next.call(null,seq__18940_18954__$1);
var G__18962 = null;
var G__18963 = 0;
var G__18964 = 0;
seq__18940_18944 = G__18961;
chunk__18941_18945 = G__18962;
count__18942_18946 = G__18963;
i__18943_18947 = G__18964;
continue;
}
}
} else
{}
}
break;
}
return c;
};
var fastest = function (query,var_args){
var replicas = null;if (arguments.length > 1) {
  replicas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fastest__delegate.call(this,query,replicas);};
fastest.cljs$lang$maxFixedArity = 1;
fastest.cljs$lang$applyTo = (function (arglist__18965){
var query = cljs.core.first(arglist__18965);
var replicas = cljs.core.rest(arglist__18965);
return fastest__delegate(query,replicas);
});
fastest.cljs$core$IFn$_invoke$arity$variadic = fastest__delegate;
return fastest;
})()
;
blog.csp.core.google = (function google(query){var c = cljs.core.async.chan.call(null);var t = cljs.core.async.timeout.call(null,80);var c__5546__auto___19188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_19083){var state_val_19084 = (state_19083[1]);if((state_val_19084 === 3))
{var inst_19079 = (state_19083[2]);var state_19083__$1 = state_19083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19083__$1,2,c,inst_19079);
} else
{if((state_val_19084 === 2))
{var inst_19081 = (state_19083[2]);var state_19083__$1 = state_19083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19083__$1,inst_19081);
} else
{if((state_val_19084 === 1))
{var inst_19077 = blog.csp.core.fastest.call(null,query,blog.csp.core.web1,blog.csp.core.web2);var state_19083__$1 = state_19083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19083__$1,3,inst_19077);
} else
{return null;
}
}
}
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_19088 = [null,null,null,null,null,null,null];(statearr_19088[0] = state_machine__5532__auto__);
(statearr_19088[1] = 1);
return statearr_19088;
});
var state_machine__5532__auto____1 = (function (state_19083){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_19083);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e19089){if((e19089 instanceof Object))
{var ex__5535__auto__ = e19089;var statearr_19090_19189 = state_19083;(statearr_19090_19189[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19190 = state_19083;
state_19083 = G__19190;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_19083){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_19083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_19091 = f__5547__auto__.call(null);(statearr_19091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___19188);
return statearr_19091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
var c__5546__auto___19191 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_19098){var state_val_19099 = (state_19098[1]);if((state_val_19099 === 3))
{var inst_19094 = (state_19098[2]);var state_19098__$1 = state_19098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19098__$1,2,c,inst_19094);
} else
{if((state_val_19099 === 2))
{var inst_19096 = (state_19098[2]);var state_19098__$1 = state_19098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19098__$1,inst_19096);
} else
{if((state_val_19099 === 1))
{var inst_19092 = blog.csp.core.fastest.call(null,query,blog.csp.core.image1,blog.csp.core.image2);var state_19098__$1 = state_19098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19098__$1,3,inst_19092);
} else
{return null;
}
}
}
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_19103 = [null,null,null,null,null,null,null];(statearr_19103[0] = state_machine__5532__auto__);
(statearr_19103[1] = 1);
return statearr_19103;
});
var state_machine__5532__auto____1 = (function (state_19098){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_19098);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e19104){if((e19104 instanceof Object))
{var ex__5535__auto__ = e19104;var statearr_19105_19192 = state_19098;(statearr_19105_19192[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19193 = state_19098;
state_19098 = G__19193;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_19098){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_19098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_19106 = f__5547__auto__.call(null);(statearr_19106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___19191);
return statearr_19106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
var c__5546__auto___19194 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_19113){var state_val_19114 = (state_19113[1]);if((state_val_19114 === 3))
{var inst_19109 = (state_19113[2]);var state_19113__$1 = state_19113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19113__$1,2,c,inst_19109);
} else
{if((state_val_19114 === 2))
{var inst_19111 = (state_19113[2]);var state_19113__$1 = state_19113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19113__$1,inst_19111);
} else
{if((state_val_19114 === 1))
{var inst_19107 = blog.csp.core.fastest.call(null,query,blog.csp.core.video1,blog.csp.core.video2);var state_19113__$1 = state_19113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19113__$1,3,inst_19107);
} else
{return null;
}
}
}
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_19118 = [null,null,null,null,null,null,null];(statearr_19118[0] = state_machine__5532__auto__);
(statearr_19118[1] = 1);
return statearr_19118;
});
var state_machine__5532__auto____1 = (function (state_19113){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_19113);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e19119){if((e19119 instanceof Object))
{var ex__5535__auto__ = e19119;var statearr_19120_19195 = state_19113;(statearr_19120_19195[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19196 = state_19113;
state_19113 = G__19196;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_19113){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_19113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_19121 = f__5547__auto__.call(null);(statearr_19121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___19194);
return statearr_19121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_19161){var state_val_19162 = (state_19161[1]);if((state_val_19162 === 1))
{var inst_19122 = 0;var inst_19123 = cljs.core.PersistentVector.EMPTY;var state_19161__$1 = (function (){var statearr_19163 = state_19161;(statearr_19163[7] = inst_19123);
(statearr_19163[8] = inst_19122);
return statearr_19163;
})();var statearr_19164_19197 = state_19161__$1;(statearr_19164_19197[2] = null);
(statearr_19164_19197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 2))
{var inst_19122 = (state_19161[8]);var inst_19125 = cljs.core._EQ_.call(null,inst_19122,3);var state_19161__$1 = state_19161;if(inst_19125)
{var statearr_19165_19198 = state_19161__$1;(statearr_19165_19198[1] = 4);
} else
{var statearr_19166_19199 = state_19161__$1;(statearr_19166_19199[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 3))
{var inst_19159 = (state_19161[2]);var state_19161__$1 = state_19161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19161__$1,inst_19159);
} else
{if((state_val_19162 === 4))
{var inst_19123 = (state_19161[7]);var state_19161__$1 = state_19161;var statearr_19167_19200 = state_19161__$1;(statearr_19167_19200[2] = inst_19123);
(statearr_19167_19200[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 5))
{var inst_19122 = (state_19161[8]);var inst_19128 = (inst_19122 + 1);var inst_19134 = [c,t];var inst_19135 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19134,null));var state_19161__$1 = (function (){var statearr_19168 = state_19161;(statearr_19168[9] = inst_19128);
return statearr_19168;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19161__$1,7,inst_19135);
} else
{if((state_val_19162 === 6))
{var inst_19157 = (state_19161[2]);var state_19161__$1 = state_19161;var statearr_19169_19201 = state_19161__$1;(statearr_19169_19201[2] = inst_19157);
(statearr_19169_19201[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 7))
{var inst_19139 = (state_19161[10]);var inst_19137 = (state_19161[11]);var inst_19137__$1 = (state_19161[2]);var inst_19138 = cljs.core.nth.call(null,inst_19137__$1,0,null);var inst_19139__$1 = cljs.core.nth.call(null,inst_19137__$1,1,null);var inst_19140 = cljs.core._EQ_.call(null,inst_19139__$1,c);var inst_19141 = cljs.core._EQ_.call(null,inst_19139__$1,t);var inst_19142 = (inst_19140) || (inst_19141);var state_19161__$1 = (function (){var statearr_19170 = state_19161;(statearr_19170[10] = inst_19139__$1);
(statearr_19170[11] = inst_19137__$1);
(statearr_19170[12] = inst_19138);
return statearr_19170;
})();if(cljs.core.truth_(inst_19142))
{var statearr_19171_19202 = state_19161__$1;(statearr_19171_19202[1] = 8);
} else
{var statearr_19172_19203 = state_19161__$1;(statearr_19172_19203[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 8))
{var inst_19137 = (state_19161[11]);var inst_19145 = cljs.core.nth.call(null,inst_19137,0,null);var state_19161__$1 = state_19161;var statearr_19173_19204 = state_19161__$1;(statearr_19173_19204[2] = inst_19145);
(statearr_19173_19204[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 9))
{var inst_19139 = (state_19161[10]);var inst_19147 = cljs.core._EQ_.call(null,inst_19139,new cljs.core.Keyword(null,"default","default",2558708147));var state_19161__$1 = state_19161;if(inst_19147)
{var statearr_19174_19205 = state_19161__$1;(statearr_19174_19205[1] = 11);
} else
{var statearr_19175_19206 = state_19161__$1;(statearr_19175_19206[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 10))
{var inst_19128 = (state_19161[9]);var inst_19123 = (state_19161[7]);var inst_19153 = (state_19161[2]);var inst_19154 = cljs.core.conj.call(null,inst_19123,inst_19153);var inst_19122 = inst_19128;var inst_19123__$1 = inst_19154;var state_19161__$1 = (function (){var statearr_19176 = state_19161;(statearr_19176[7] = inst_19123__$1);
(statearr_19176[8] = inst_19122);
return statearr_19176;
})();var statearr_19177_19207 = state_19161__$1;(statearr_19177_19207[2] = null);
(statearr_19177_19207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 11))
{var inst_19138 = (state_19161[12]);var state_19161__$1 = state_19161;var statearr_19178_19208 = state_19161__$1;(statearr_19178_19208[2] = inst_19138);
(statearr_19178_19208[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 12))
{var state_19161__$1 = state_19161;var statearr_19179_19209 = state_19161__$1;(statearr_19179_19209[2] = null);
(statearr_19179_19209[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19162 === 13))
{var inst_19151 = (state_19161[2]);var state_19161__$1 = state_19161;var statearr_19180_19210 = state_19161__$1;(statearr_19180_19210[2] = inst_19151);
(statearr_19180_19210[1] = 10);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_19184 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19184[0] = state_machine__5532__auto__);
(statearr_19184[1] = 1);
return statearr_19184;
});
var state_machine__5532__auto____1 = (function (state_19161){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_19161);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e19185){if((e19185 instanceof Object))
{var ex__5535__auto__ = e19185;var statearr_19186_19211 = state_19161;(statearr_19186_19211[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19161);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19212 = state_19161;
state_19161 = G__19212;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_19161){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_19161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_19187 = f__5547__auto__.call(null);(statearr_19187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_19187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return c__5546__auto__;
});
var el_19246 = blog.utils.dom.by_id.call(null,"ex4-out");var c_19247 = blog.utils.reactive.listen.call(null,blog.utils.dom.by_id.call(null,"search"),new cljs.core.Keyword(null,"click","click",1108654330));var c__5546__auto___19248 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_19229){var state_val_19230 = (state_19229[1]);if((state_val_19230 === 8))
{var inst_19219 = (state_19229[2]);var inst_19220 = cljs.core.pr_str.call(null,inst_19219);var inst_19221 = blog.utils.dom.set_html_BANG_.call(null,el_19246,inst_19220);var state_19229__$1 = (function (){var statearr_19231 = state_19229;(statearr_19231[7] = inst_19221);
return statearr_19231;
})();var statearr_19232_19249 = state_19229__$1;(statearr_19232_19249[2] = null);
(statearr_19232_19249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19230 === 7))
{var inst_19216 = (state_19229[2]);var inst_19217 = blog.csp.core.google.call(null,"clojure");var state_19229__$1 = (function (){var statearr_19233 = state_19229;(statearr_19233[8] = inst_19216);
return statearr_19233;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19229__$1,8,inst_19217);
} else
{if((state_val_19230 === 6))
{var inst_19225 = (state_19229[2]);var state_19229__$1 = state_19229;var statearr_19234_19250 = state_19229__$1;(statearr_19234_19250[2] = inst_19225);
(statearr_19234_19250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19230 === 5))
{var state_19229__$1 = state_19229;var statearr_19235_19251 = state_19229__$1;(statearr_19235_19251[2] = null);
(statearr_19235_19251[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19230 === 4))
{var state_19229__$1 = state_19229;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19229__$1,7,c_19247);
} else
{if((state_val_19230 === 3))
{var inst_19227 = (state_19229[2]);var state_19229__$1 = state_19229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19229__$1,inst_19227);
} else
{if((state_val_19230 === 2))
{var state_19229__$1 = state_19229;if(true)
{var statearr_19236_19252 = state_19229__$1;(statearr_19236_19252[1] = 4);
} else
{var statearr_19237_19253 = state_19229__$1;(statearr_19237_19253[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19230 === 1))
{var state_19229__$1 = state_19229;var statearr_19238_19254 = state_19229__$1;(statearr_19238_19254[2] = null);
(statearr_19238_19254[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_19242 = [null,null,null,null,null,null,null,null,null];(statearr_19242[0] = state_machine__5532__auto__);
(statearr_19242[1] = 1);
return statearr_19242;
});
var state_machine__5532__auto____1 = (function (state_19229){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_19229);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e19243){if((e19243 instanceof Object))
{var ex__5535__auto__ = e19243;var statearr_19244_19255 = state_19229;(statearr_19244_19255[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19229);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19256 = state_19229;
state_19229 = G__19256;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_19229){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_19229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_19245 = f__5547__auto__.call(null);(statearr_19245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___19248);
return statearr_19245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
cljs.core.println.call(null,"here!");

//# sourceMappingURL=core.js.map