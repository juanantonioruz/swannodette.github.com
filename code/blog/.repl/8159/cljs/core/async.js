// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17812 = (function (f,fn_handler,meta17813){
this.f = f;
this.fn_handler = fn_handler;
this.meta17813 = meta17813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17812.cljs$lang$type = true;
cljs.core.async.t17812.cljs$lang$ctorStr = "cljs.core.async/t17812";
cljs.core.async.t17812.cljs$lang$ctorPrWriter = (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t17812");
});
cljs.core.async.t17812.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17814){var self__ = this;
var _17814__$1 = this;return self__.meta17813;
});
cljs.core.async.t17812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17814,meta17813__$1){var self__ = this;
var _17814__$1 = this;return (new cljs.core.async.t17812(self__.f,self__.fn_handler,meta17813__$1));
});
cljs.core.async.__GT_t17812 = (function __GT_t17812(f__$1,fn_handler__$1,meta17813){return (new cljs.core.async.t17812(f__$1,fn_handler__$1,meta17813));
});
}
return (new cljs.core.async.t17812(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17816 = buff;if(G__17816)
{var bit__5568__auto__ = null;if(cljs.core.truth_((function (){var or__4924__auto__ = bit__5568__auto__;if(cljs.core.truth_(or__4924__auto__))
{return or__4924__auto__;
} else
{return G__17816.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17816.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17816);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17816);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_17817 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17817);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_17817);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4912__auto__ = ret;if(cljs.core.truth_(and__4912__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4912__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5766__auto___17818 = n;var x_17819 = 0;while(true){
if((x_17819 < n__5766__auto___17818))
{(a[x_17819] = 0);
{
var G__17820 = (x_17819 + 1);
x_17819 = G__17820;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__17821 = (i + 1);
i = G__17821;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17825 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17825 = (function (flag,alt_flag,meta17826){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17826 = meta17826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17825.cljs$lang$type = true;
cljs.core.async.t17825.cljs$lang$ctorStr = "cljs.core.async/t17825";
cljs.core.async.t17825.cljs$lang$ctorPrWriter = (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t17825");
});
cljs.core.async.t17825.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t17825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t17825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17827){var self__ = this;
var _17827__$1 = this;return self__.meta17826;
});
cljs.core.async.t17825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17827,meta17826__$1){var self__ = this;
var _17827__$1 = this;return (new cljs.core.async.t17825(self__.flag,self__.alt_flag,meta17826__$1));
});
cljs.core.async.__GT_t17825 = (function __GT_t17825(flag__$1,alt_flag__$1,meta17826){return (new cljs.core.async.t17825(flag__$1,alt_flag__$1,meta17826));
});
}
return (new cljs.core.async.t17825(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17831 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17831 = (function (cb,flag,alt_handler,meta17832){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17832 = meta17832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17831.cljs$lang$type = true;
cljs.core.async.t17831.cljs$lang$ctorStr = "cljs.core.async/t17831";
cljs.core.async.t17831.cljs$lang$ctorPrWriter = (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t17831");
});
cljs.core.async.t17831.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17833){var self__ = this;
var _17833__$1 = this;return self__.meta17832;
});
cljs.core.async.t17831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17833,meta17832__$1){var self__ = this;
var _17833__$1 = this;return (new cljs.core.async.t17831(self__.cb,self__.flag,self__.alt_handler,meta17832__$1));
});
cljs.core.async.__GT_t17831 = (function __GT_t17831(cb__$1,flag__$1,alt_handler__$1,meta17832){return (new cljs.core.async.t17831(cb__$1,flag__$1,alt_handler__$1,meta17832));
});
}
return (new cljs.core.async.t17831(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17834_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17834_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4924__auto__ = wport;if(cljs.core.truth_(or__4924__auto__))
{return or__4924__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17835 = (i + 1);
i = G__17835;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4924__auto__ = ret;if(cljs.core.truth_(or__4924__auto__))
{return or__4924__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4912__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4912__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4912__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17836){var map__17838 = p__17836;var map__17838__$1 = ((cljs.core.seq_QMARK_.call(null,map__17838))?cljs.core.apply.call(null,cljs.core.hash_map,map__17838):map__17838);var opts = map__17838__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__17836 = null;if (arguments.length > 1) {
  p__17836 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17836);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17839){
var ports = cljs.core.first(arglist__17839);
var p__17836 = cljs.core.rest(arglist__17839);
return alts_BANG___delegate(ports,p__17836);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17847 = (function (ch,f,map_LT_,meta17848){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17848 = meta17848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17847.cljs$lang$type = true;
cljs.core.async.t17847.cljs$lang$ctorStr = "cljs.core.async/t17847";
cljs.core.async.t17847.cljs$lang$ctorPrWriter = (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t17847");
});
cljs.core.async.t17847.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t17847.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17850 = (function (fn1,_,meta17848,ch,f,map_LT_,meta17851){
this.fn1 = fn1;
this._ = _;
this.meta17848 = meta17848;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17851 = meta17851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17850.cljs$lang$type = true;
cljs.core.async.t17850.cljs$lang$ctorStr = "cljs.core.async/t17850";
cljs.core.async.t17850.cljs$lang$ctorPrWriter = (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t17850");
});
cljs.core.async.t17850.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t17850.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t17850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__17840_SHARP_){return f1.call(null,(((p1__17840_SHARP_ == null))?null:self__.f.call(null,p1__17840_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t17850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17852){var self__ = this;
var _17852__$1 = this;return self__.meta17851;
});
cljs.core.async.t17850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17852,meta17851__$1){var self__ = this;
var _17852__$1 = this;return (new cljs.core.async.t17850(self__.fn1,self__._,self__.meta17848,self__.ch,self__.f,self__.map_LT_,meta17851__$1));
});
cljs.core.async.__GT_t17850 = (function __GT_t17850(fn1__$1,___$2,meta17848__$1,ch__$2,f__$2,map_LT___$2,meta17851){return (new cljs.core.async.t17850(fn1__$1,___$2,meta17848__$1,ch__$2,f__$2,map_LT___$2,meta17851));
});
}
return (new cljs.core.async.t17850(fn1,___$1,self__.meta17848,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4912__auto__ = ret;if(cljs.core.truth_(and__4912__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4912__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17847.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17849){var self__ = this;
var _17849__$1 = this;return self__.meta17848;
});
cljs.core.async.t17847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17849,meta17848__$1){var self__ = this;
var _17849__$1 = this;return (new cljs.core.async.t17847(self__.ch,self__.f,self__.map_LT_,meta17848__$1));
});
cljs.core.async.__GT_t17847 = (function __GT_t17847(ch__$1,f__$1,map_LT___$1,meta17848){return (new cljs.core.async.t17847(ch__$1,f__$1,map_LT___$1,meta17848));
});
}
return (new cljs.core.async.t17847(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17856 = (function (ch,f,map_GT_,meta17857){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17857 = meta17857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17856.cljs$lang$type = true;
cljs.core.async.t17856.cljs$lang$ctorStr = "cljs.core.async/t17856";
cljs.core.async.t17856.cljs$lang$ctorPrWriter = (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t17856");
});
cljs.core.async.t17856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t17856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17856.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17858){var self__ = this;
var _17858__$1 = this;return self__.meta17857;
});
cljs.core.async.t17856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17858,meta17857__$1){var self__ = this;
var _17858__$1 = this;return (new cljs.core.async.t17856(self__.ch,self__.f,self__.map_GT_,meta17857__$1));
});
cljs.core.async.__GT_t17856 = (function __GT_t17856(ch__$1,f__$1,map_GT___$1,meta17857){return (new cljs.core.async.t17856(ch__$1,f__$1,map_GT___$1,meta17857));
});
}
return (new cljs.core.async.t17856(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17862 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17862 = (function (ch,p,filter_GT_,meta17863){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17863 = meta17863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17862.cljs$lang$type = true;
cljs.core.async.t17862.cljs$lang$ctorStr = "cljs.core.async/t17862";
cljs.core.async.t17862.cljs$lang$ctorPrWriter = (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t17862");
});
cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17864){var self__ = this;
var _17864__$1 = this;return self__.meta17863;
});
cljs.core.async.t17862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17864,meta17863__$1){var self__ = this;
var _17864__$1 = this;return (new cljs.core.async.t17862(self__.ch,self__.p,self__.filter_GT_,meta17863__$1));
});
cljs.core.async.__GT_t17862 = (function __GT_t17862(ch__$1,p__$1,filter_GT___$1,meta17863){return (new cljs.core.async.t17862(ch__$1,p__$1,filter_GT___$1,meta17863));
});
}
return (new cljs.core.async.t17862(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8560__auto___17947 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_17926){var state_val_17927 = (state_17926[1]);if((state_val_17927 === 1))
{var state_17926__$1 = state_17926;var statearr_17928_17948 = state_17926__$1;(statearr_17928_17948[2] = null);
(statearr_17928_17948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17927 === 2))
{var state_17926__$1 = state_17926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17926__$1,4,ch);
} else
{if((state_val_17927 === 3))
{var inst_17924 = (state_17926[2]);var state_17926__$1 = state_17926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17926__$1,inst_17924);
} else
{if((state_val_17927 === 4))
{var inst_17908 = (state_17926[7]);var inst_17908__$1 = (state_17926[2]);var inst_17909 = (inst_17908__$1 == null);var state_17926__$1 = (function (){var statearr_17929 = state_17926;(statearr_17929[7] = inst_17908__$1);
return statearr_17929;
})();if(cljs.core.truth_(inst_17909))
{var statearr_17930_17949 = state_17926__$1;(statearr_17930_17949[1] = 5);
} else
{var statearr_17931_17950 = state_17926__$1;(statearr_17931_17950[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17927 === 5))
{var inst_17911 = cljs.core.async.close_BANG_.call(null,out);var state_17926__$1 = state_17926;var statearr_17932_17951 = state_17926__$1;(statearr_17932_17951[2] = inst_17911);
(statearr_17932_17951[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17927 === 6))
{var inst_17908 = (state_17926[7]);var inst_17913 = p.call(null,inst_17908);var state_17926__$1 = state_17926;if(cljs.core.truth_(inst_17913))
{var statearr_17933_17952 = state_17926__$1;(statearr_17933_17952[1] = 8);
} else
{var statearr_17934_17953 = state_17926__$1;(statearr_17934_17953[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17927 === 7))
{var inst_17922 = (state_17926[2]);var state_17926__$1 = state_17926;var statearr_17935_17954 = state_17926__$1;(statearr_17935_17954[2] = inst_17922);
(statearr_17935_17954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17927 === 8))
{var inst_17908 = (state_17926[7]);var state_17926__$1 = state_17926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17926__$1,11,out,inst_17908);
} else
{if((state_val_17927 === 9))
{var state_17926__$1 = state_17926;var statearr_17936_17955 = state_17926__$1;(statearr_17936_17955[2] = null);
(statearr_17936_17955[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17927 === 10))
{var inst_17919 = (state_17926[2]);var state_17926__$1 = (function (){var statearr_17937 = state_17926;(statearr_17937[8] = inst_17919);
return statearr_17937;
})();var statearr_17938_17956 = state_17926__$1;(statearr_17938_17956[2] = null);
(statearr_17938_17956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17927 === 11))
{var inst_17916 = (state_17926[2]);var state_17926__$1 = state_17926;var statearr_17939_17957 = state_17926__$1;(statearr_17939_17957[2] = inst_17916);
(statearr_17939_17957[1] = 10);
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
var state_machine__8407__auto____0 = (function (){var statearr_17943 = [null,null,null,null,null,null,null,null,null];(statearr_17943[0] = state_machine__8407__auto__);
(statearr_17943[1] = 1);
return statearr_17943;
});
var state_machine__8407__auto____1 = (function (state_17926){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_17926);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e17944){if((e17944 instanceof Object))
{var ex__8410__auto__ = e17944;var statearr_17945_17958 = state_17926;(statearr_17945_17958[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17959 = state_17926;
state_17926 = G__17959;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_17926){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_17926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_17946 = f__8561__auto__.call(null);(statearr_17946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___17947);
return statearr_17946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8560__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_18111){var state_val_18112 = (state_18111[1]);if((state_val_18112 === 1))
{var state_18111__$1 = state_18111;var statearr_18113_18150 = state_18111__$1;(statearr_18113_18150[2] = null);
(statearr_18113_18150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 2))
{var state_18111__$1 = state_18111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18111__$1,4,in$);
} else
{if((state_val_18112 === 3))
{var inst_18109 = (state_18111[2]);var state_18111__$1 = state_18111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18111__$1,inst_18109);
} else
{if((state_val_18112 === 4))
{var inst_18057 = (state_18111[7]);var inst_18057__$1 = (state_18111[2]);var inst_18058 = (inst_18057__$1 == null);var state_18111__$1 = (function (){var statearr_18114 = state_18111;(statearr_18114[7] = inst_18057__$1);
return statearr_18114;
})();if(cljs.core.truth_(inst_18058))
{var statearr_18115_18151 = state_18111__$1;(statearr_18115_18151[1] = 5);
} else
{var statearr_18116_18152 = state_18111__$1;(statearr_18116_18152[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 5))
{var inst_18060 = cljs.core.async.close_BANG_.call(null,out);var state_18111__$1 = state_18111;var statearr_18117_18153 = state_18111__$1;(statearr_18117_18153[2] = inst_18060);
(statearr_18117_18153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 6))
{var inst_18057 = (state_18111[7]);var inst_18062 = f.call(null,inst_18057);var inst_18067 = cljs.core.seq.call(null,inst_18062);var inst_18068 = inst_18067;var inst_18069 = null;var inst_18070 = 0;var inst_18071 = 0;var state_18111__$1 = (function (){var statearr_18118 = state_18111;(statearr_18118[8] = inst_18071);
(statearr_18118[9] = inst_18070);
(statearr_18118[10] = inst_18069);
(statearr_18118[11] = inst_18068);
return statearr_18118;
})();var statearr_18119_18154 = state_18111__$1;(statearr_18119_18154[2] = null);
(statearr_18119_18154[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 7))
{var inst_18107 = (state_18111[2]);var state_18111__$1 = state_18111;var statearr_18120_18155 = state_18111__$1;(statearr_18120_18155[2] = inst_18107);
(statearr_18120_18155[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 8))
{var inst_18071 = (state_18111[8]);var inst_18070 = (state_18111[9]);var inst_18073 = (inst_18071 < inst_18070);var inst_18074 = inst_18073;var state_18111__$1 = state_18111;if(cljs.core.truth_(inst_18074))
{var statearr_18121_18156 = state_18111__$1;(statearr_18121_18156[1] = 10);
} else
{var statearr_18122_18157 = state_18111__$1;(statearr_18122_18157[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 9))
{var inst_18104 = (state_18111[2]);var state_18111__$1 = (function (){var statearr_18123 = state_18111;(statearr_18123[12] = inst_18104);
return statearr_18123;
})();var statearr_18124_18158 = state_18111__$1;(statearr_18124_18158[2] = null);
(statearr_18124_18158[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 10))
{var inst_18071 = (state_18111[8]);var inst_18069 = (state_18111[10]);var inst_18076 = cljs.core._nth.call(null,inst_18069,inst_18071);var state_18111__$1 = state_18111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18111__$1,13,out,inst_18076);
} else
{if((state_val_18112 === 11))
{var inst_18068 = (state_18111[11]);var inst_18082 = (state_18111[13]);var inst_18082__$1 = cljs.core.seq.call(null,inst_18068);var state_18111__$1 = (function (){var statearr_18128 = state_18111;(statearr_18128[13] = inst_18082__$1);
return statearr_18128;
})();if(inst_18082__$1)
{var statearr_18129_18159 = state_18111__$1;(statearr_18129_18159[1] = 14);
} else
{var statearr_18130_18160 = state_18111__$1;(statearr_18130_18160[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 12))
{var inst_18102 = (state_18111[2]);var state_18111__$1 = state_18111;var statearr_18131_18161 = state_18111__$1;(statearr_18131_18161[2] = inst_18102);
(statearr_18131_18161[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 13))
{var inst_18071 = (state_18111[8]);var inst_18070 = (state_18111[9]);var inst_18069 = (state_18111[10]);var inst_18068 = (state_18111[11]);var inst_18078 = (state_18111[2]);var inst_18079 = (inst_18071 + 1);var tmp18125 = inst_18070;var tmp18126 = inst_18069;var tmp18127 = inst_18068;var inst_18068__$1 = tmp18127;var inst_18069__$1 = tmp18126;var inst_18070__$1 = tmp18125;var inst_18071__$1 = inst_18079;var state_18111__$1 = (function (){var statearr_18132 = state_18111;(statearr_18132[8] = inst_18071__$1);
(statearr_18132[9] = inst_18070__$1);
(statearr_18132[10] = inst_18069__$1);
(statearr_18132[11] = inst_18068__$1);
(statearr_18132[14] = inst_18078);
return statearr_18132;
})();var statearr_18133_18162 = state_18111__$1;(statearr_18133_18162[2] = null);
(statearr_18133_18162[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 14))
{var inst_18082 = (state_18111[13]);var inst_18084 = cljs.core.chunked_seq_QMARK_.call(null,inst_18082);var state_18111__$1 = state_18111;if(inst_18084)
{var statearr_18134_18163 = state_18111__$1;(statearr_18134_18163[1] = 17);
} else
{var statearr_18135_18164 = state_18111__$1;(statearr_18135_18164[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 15))
{var state_18111__$1 = state_18111;var statearr_18136_18165 = state_18111__$1;(statearr_18136_18165[2] = null);
(statearr_18136_18165[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 16))
{var inst_18100 = (state_18111[2]);var state_18111__$1 = state_18111;var statearr_18137_18166 = state_18111__$1;(statearr_18137_18166[2] = inst_18100);
(statearr_18137_18166[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 17))
{var inst_18082 = (state_18111[13]);var inst_18086 = cljs.core.chunk_first.call(null,inst_18082);var inst_18087 = cljs.core.chunk_rest.call(null,inst_18082);var inst_18088 = cljs.core.count.call(null,inst_18086);var inst_18068 = inst_18087;var inst_18069 = inst_18086;var inst_18070 = inst_18088;var inst_18071 = 0;var state_18111__$1 = (function (){var statearr_18138 = state_18111;(statearr_18138[8] = inst_18071);
(statearr_18138[9] = inst_18070);
(statearr_18138[10] = inst_18069);
(statearr_18138[11] = inst_18068);
return statearr_18138;
})();var statearr_18139_18167 = state_18111__$1;(statearr_18139_18167[2] = null);
(statearr_18139_18167[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 18))
{var inst_18082 = (state_18111[13]);var inst_18091 = cljs.core.first.call(null,inst_18082);var state_18111__$1 = state_18111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18111__$1,20,out,inst_18091);
} else
{if((state_val_18112 === 19))
{var inst_18097 = (state_18111[2]);var state_18111__$1 = state_18111;var statearr_18140_18168 = state_18111__$1;(statearr_18140_18168[2] = inst_18097);
(statearr_18140_18168[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18112 === 20))
{var inst_18082 = (state_18111[13]);var inst_18093 = (state_18111[2]);var inst_18094 = cljs.core.next.call(null,inst_18082);var inst_18068 = inst_18094;var inst_18069 = null;var inst_18070 = 0;var inst_18071 = 0;var state_18111__$1 = (function (){var statearr_18141 = state_18111;(statearr_18141[8] = inst_18071);
(statearr_18141[9] = inst_18070);
(statearr_18141[15] = inst_18093);
(statearr_18141[10] = inst_18069);
(statearr_18141[11] = inst_18068);
return statearr_18141;
})();var statearr_18142_18169 = state_18111__$1;(statearr_18142_18169[2] = null);
(statearr_18142_18169[1] = 8);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_18146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18146[0] = state_machine__8407__auto__);
(statearr_18146[1] = 1);
return statearr_18146;
});
var state_machine__8407__auto____1 = (function (state_18111){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_18111);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e18147){if((e18147 instanceof Object))
{var ex__8410__auto__ = e18147;var statearr_18148_18170 = state_18111;(statearr_18148_18170[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18171 = state_18111;
state_18111 = G__18171;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_18111){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_18111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_18149 = f__8561__auto__.call(null);(statearr_18149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto__);
return statearr_18149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return c__8560__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8560__auto___18252 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_18231){var state_val_18232 = (state_18231[1]);if((state_val_18232 === 1))
{var state_18231__$1 = state_18231;var statearr_18233_18253 = state_18231__$1;(statearr_18233_18253[2] = null);
(statearr_18233_18253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18232 === 2))
{var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18231__$1,4,from);
} else
{if((state_val_18232 === 3))
{var inst_18229 = (state_18231[2]);var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18231__$1,inst_18229);
} else
{if((state_val_18232 === 4))
{var inst_18214 = (state_18231[7]);var inst_18214__$1 = (state_18231[2]);var inst_18215 = (inst_18214__$1 == null);var state_18231__$1 = (function (){var statearr_18234 = state_18231;(statearr_18234[7] = inst_18214__$1);
return statearr_18234;
})();if(cljs.core.truth_(inst_18215))
{var statearr_18235_18254 = state_18231__$1;(statearr_18235_18254[1] = 5);
} else
{var statearr_18236_18255 = state_18231__$1;(statearr_18236_18255[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18232 === 5))
{var state_18231__$1 = state_18231;if(cljs.core.truth_(close_QMARK_))
{var statearr_18237_18256 = state_18231__$1;(statearr_18237_18256[1] = 8);
} else
{var statearr_18238_18257 = state_18231__$1;(statearr_18238_18257[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18232 === 6))
{var inst_18214 = (state_18231[7]);var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18231__$1,11,to,inst_18214);
} else
{if((state_val_18232 === 7))
{var inst_18227 = (state_18231[2]);var state_18231__$1 = state_18231;var statearr_18239_18258 = state_18231__$1;(statearr_18239_18258[2] = inst_18227);
(statearr_18239_18258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18232 === 8))
{var inst_18218 = cljs.core.async.close_BANG_.call(null,to);var state_18231__$1 = state_18231;var statearr_18240_18259 = state_18231__$1;(statearr_18240_18259[2] = inst_18218);
(statearr_18240_18259[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18232 === 9))
{var state_18231__$1 = state_18231;var statearr_18241_18260 = state_18231__$1;(statearr_18241_18260[2] = null);
(statearr_18241_18260[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18232 === 10))
{var inst_18221 = (state_18231[2]);var state_18231__$1 = state_18231;var statearr_18242_18261 = state_18231__$1;(statearr_18242_18261[2] = inst_18221);
(statearr_18242_18261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18232 === 11))
{var inst_18224 = (state_18231[2]);var state_18231__$1 = (function (){var statearr_18243 = state_18231;(statearr_18243[8] = inst_18224);
return statearr_18243;
})();var statearr_18244_18262 = state_18231__$1;(statearr_18244_18262[2] = null);
(statearr_18244_18262[1] = 2);
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
var state_machine__8407__auto____0 = (function (){var statearr_18248 = [null,null,null,null,null,null,null,null,null];(statearr_18248[0] = state_machine__8407__auto__);
(statearr_18248[1] = 1);
return statearr_18248;
});
var state_machine__8407__auto____1 = (function (state_18231){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_18231);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e18249){if((e18249 instanceof Object))
{var ex__8410__auto__ = e18249;var statearr_18250_18263 = state_18231;(statearr_18250_18263[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18264 = state_18231;
state_18231 = G__18264;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_18251 = f__8561__auto__.call(null);(statearr_18251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___18252);
return statearr_18251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8560__auto___18351 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_18329){var state_val_18330 = (state_18329[1]);if((state_val_18330 === 1))
{var state_18329__$1 = state_18329;var statearr_18331_18352 = state_18329__$1;(statearr_18331_18352[2] = null);
(statearr_18331_18352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 2))
{var state_18329__$1 = state_18329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18329__$1,4,ch);
} else
{if((state_val_18330 === 3))
{var inst_18327 = (state_18329[2]);var state_18329__$1 = state_18329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18329__$1,inst_18327);
} else
{if((state_val_18330 === 4))
{var inst_18310 = (state_18329[7]);var inst_18310__$1 = (state_18329[2]);var inst_18311 = (inst_18310__$1 == null);var state_18329__$1 = (function (){var statearr_18332 = state_18329;(statearr_18332[7] = inst_18310__$1);
return statearr_18332;
})();if(cljs.core.truth_(inst_18311))
{var statearr_18333_18353 = state_18329__$1;(statearr_18333_18353[1] = 5);
} else
{var statearr_18334_18354 = state_18329__$1;(statearr_18334_18354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 5))
{var inst_18313 = cljs.core.async.close_BANG_.call(null,tc);var inst_18314 = cljs.core.async.close_BANG_.call(null,fc);var state_18329__$1 = (function (){var statearr_18335 = state_18329;(statearr_18335[8] = inst_18313);
return statearr_18335;
})();var statearr_18336_18355 = state_18329__$1;(statearr_18336_18355[2] = inst_18314);
(statearr_18336_18355[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 6))
{var inst_18310 = (state_18329[7]);var inst_18316 = p.call(null,inst_18310);var state_18329__$1 = state_18329;if(cljs.core.truth_(inst_18316))
{var statearr_18337_18356 = state_18329__$1;(statearr_18337_18356[1] = 9);
} else
{var statearr_18338_18357 = state_18329__$1;(statearr_18338_18357[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 7))
{var inst_18325 = (state_18329[2]);var state_18329__$1 = state_18329;var statearr_18339_18358 = state_18329__$1;(statearr_18339_18358[2] = inst_18325);
(statearr_18339_18358[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 8))
{var inst_18322 = (state_18329[2]);var state_18329__$1 = (function (){var statearr_18340 = state_18329;(statearr_18340[9] = inst_18322);
return statearr_18340;
})();var statearr_18341_18359 = state_18329__$1;(statearr_18341_18359[2] = null);
(statearr_18341_18359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 9))
{var state_18329__$1 = state_18329;var statearr_18342_18360 = state_18329__$1;(statearr_18342_18360[2] = tc);
(statearr_18342_18360[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 10))
{var state_18329__$1 = state_18329;var statearr_18343_18361 = state_18329__$1;(statearr_18343_18361[2] = fc);
(statearr_18343_18361[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 11))
{var inst_18310 = (state_18329[7]);var inst_18320 = (state_18329[2]);var state_18329__$1 = state_18329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18329__$1,8,inst_18320,inst_18310);
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
var state_machine__8407__auto____0 = (function (){var statearr_18347 = [null,null,null,null,null,null,null,null,null,null];(statearr_18347[0] = state_machine__8407__auto__);
(statearr_18347[1] = 1);
return statearr_18347;
});
var state_machine__8407__auto____1 = (function (state_18329){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_18329);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e18348){if((e18348 instanceof Object))
{var ex__8410__auto__ = e18348;var statearr_18349_18362 = state_18329;(statearr_18349_18362[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18363 = state_18329;
state_18329 = G__18363;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_18329){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_18329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_18350 = f__8561__auto__.call(null);(statearr_18350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___18351);
return statearr_18350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8560__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_18410){var state_val_18411 = (state_18410[1]);if((state_val_18411 === 7))
{var inst_18406 = (state_18410[2]);var state_18410__$1 = state_18410;var statearr_18412_18428 = state_18410__$1;(statearr_18412_18428[2] = inst_18406);
(statearr_18412_18428[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18411 === 6))
{var inst_18396 = (state_18410[7]);var inst_18399 = (state_18410[8]);var inst_18403 = f.call(null,inst_18396,inst_18399);var inst_18396__$1 = inst_18403;var state_18410__$1 = (function (){var statearr_18413 = state_18410;(statearr_18413[7] = inst_18396__$1);
return statearr_18413;
})();var statearr_18414_18429 = state_18410__$1;(statearr_18414_18429[2] = null);
(statearr_18414_18429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18411 === 5))
{var inst_18396 = (state_18410[7]);var state_18410__$1 = state_18410;var statearr_18415_18430 = state_18410__$1;(statearr_18415_18430[2] = inst_18396);
(statearr_18415_18430[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18411 === 4))
{var inst_18399 = (state_18410[8]);var inst_18399__$1 = (state_18410[2]);var inst_18400 = (inst_18399__$1 == null);var state_18410__$1 = (function (){var statearr_18416 = state_18410;(statearr_18416[8] = inst_18399__$1);
return statearr_18416;
})();if(cljs.core.truth_(inst_18400))
{var statearr_18417_18431 = state_18410__$1;(statearr_18417_18431[1] = 5);
} else
{var statearr_18418_18432 = state_18410__$1;(statearr_18418_18432[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18411 === 3))
{var inst_18408 = (state_18410[2]);var state_18410__$1 = state_18410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18410__$1,inst_18408);
} else
{if((state_val_18411 === 2))
{var state_18410__$1 = state_18410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18410__$1,4,ch);
} else
{if((state_val_18411 === 1))
{var inst_18396 = init;var state_18410__$1 = (function (){var statearr_18419 = state_18410;(statearr_18419[7] = inst_18396);
return statearr_18419;
})();var statearr_18420_18433 = state_18410__$1;(statearr_18420_18433[2] = null);
(statearr_18420_18433[1] = 2);
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
var state_machine__8407__auto____0 = (function (){var statearr_18424 = [null,null,null,null,null,null,null,null,null];(statearr_18424[0] = state_machine__8407__auto__);
(statearr_18424[1] = 1);
return statearr_18424;
});
var state_machine__8407__auto____1 = (function (state_18410){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_18410);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e18425){if((e18425 instanceof Object))
{var ex__8410__auto__ = e18425;var statearr_18426_18434 = state_18410;(statearr_18426_18434[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18435 = state_18410;
state_18410 = G__18435;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_18410){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_18410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_18427 = f__8561__auto__.call(null);(statearr_18427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto__);
return statearr_18427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return c__8560__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8560__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_18497){var state_val_18498 = (state_18497[1]);if((state_val_18498 === 1))
{var inst_18477 = cljs.core.seq.call(null,coll);var inst_18478 = inst_18477;var state_18497__$1 = (function (){var statearr_18499 = state_18497;(statearr_18499[7] = inst_18478);
return statearr_18499;
})();var statearr_18500_18518 = state_18497__$1;(statearr_18500_18518[2] = null);
(statearr_18500_18518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18498 === 2))
{var inst_18478 = (state_18497[7]);var state_18497__$1 = state_18497;if(cljs.core.truth_(inst_18478))
{var statearr_18501_18519 = state_18497__$1;(statearr_18501_18519[1] = 4);
} else
{var statearr_18502_18520 = state_18497__$1;(statearr_18502_18520[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18498 === 3))
{var inst_18495 = (state_18497[2]);var state_18497__$1 = state_18497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18497__$1,inst_18495);
} else
{if((state_val_18498 === 4))
{var inst_18478 = (state_18497[7]);var inst_18481 = cljs.core.first.call(null,inst_18478);var state_18497__$1 = state_18497;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18497__$1,7,ch,inst_18481);
} else
{if((state_val_18498 === 5))
{var state_18497__$1 = state_18497;if(cljs.core.truth_(close_QMARK_))
{var statearr_18503_18521 = state_18497__$1;(statearr_18503_18521[1] = 8);
} else
{var statearr_18504_18522 = state_18497__$1;(statearr_18504_18522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18498 === 6))
{var inst_18493 = (state_18497[2]);var state_18497__$1 = state_18497;var statearr_18505_18523 = state_18497__$1;(statearr_18505_18523[2] = inst_18493);
(statearr_18505_18523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18498 === 7))
{var inst_18478 = (state_18497[7]);var inst_18483 = (state_18497[2]);var inst_18484 = cljs.core.next.call(null,inst_18478);var inst_18478__$1 = inst_18484;var state_18497__$1 = (function (){var statearr_18506 = state_18497;(statearr_18506[7] = inst_18478__$1);
(statearr_18506[8] = inst_18483);
return statearr_18506;
})();var statearr_18507_18524 = state_18497__$1;(statearr_18507_18524[2] = null);
(statearr_18507_18524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18498 === 8))
{var inst_18488 = cljs.core.async.close_BANG_.call(null,ch);var state_18497__$1 = state_18497;var statearr_18508_18525 = state_18497__$1;(statearr_18508_18525[2] = inst_18488);
(statearr_18508_18525[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18498 === 9))
{var state_18497__$1 = state_18497;var statearr_18509_18526 = state_18497__$1;(statearr_18509_18526[2] = null);
(statearr_18509_18526[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18498 === 10))
{var inst_18491 = (state_18497[2]);var state_18497__$1 = state_18497;var statearr_18510_18527 = state_18497__$1;(statearr_18510_18527[2] = inst_18491);
(statearr_18510_18527[1] = 6);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_18514 = [null,null,null,null,null,null,null,null,null];(statearr_18514[0] = state_machine__8407__auto__);
(statearr_18514[1] = 1);
return statearr_18514;
});
var state_machine__8407__auto____1 = (function (state_18497){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_18497);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e18515){if((e18515 instanceof Object))
{var ex__8410__auto__ = e18515;var statearr_18516_18528 = state_18497;(statearr_18516_18528[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18497);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18529 = state_18497;
state_18497 = G__18529;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_18497){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_18497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_18517 = f__8561__auto__.call(null);(statearr_18517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto__);
return statearr_18517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return c__8560__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18531 = {};return obj18531;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4912__auto__ = _;if(and__4912__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4912__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5545__auto__ = (((_ == null))?null:_);return (function (){var or__4924__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18533 = {};return obj18533;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18757 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18757 = (function (cs,ch,mult,meta18758){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18758 = meta18758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18757.cljs$lang$type = true;
cljs.core.async.t18757.cljs$lang$ctorStr = "cljs.core.async/t18757";
cljs.core.async.t18757.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t18757");
});})(cs))
;
cljs.core.async.t18757.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18757.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18757.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18757.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18757.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18759){var self__ = this;
var _18759__$1 = this;return self__.meta18758;
});})(cs))
;
cljs.core.async.t18757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18759,meta18758__$1){var self__ = this;
var _18759__$1 = this;return (new cljs.core.async.t18757(self__.cs,self__.ch,self__.mult,meta18758__$1));
});})(cs))
;
cljs.core.async.__GT_t18757 = ((function (cs){
return (function __GT_t18757(cs__$1,ch__$1,mult__$1,meta18758){return (new cljs.core.async.t18757(cs__$1,ch__$1,mult__$1,meta18758));
});})(cs))
;
}
return (new cljs.core.async.t18757(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8560__auto___18980 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_18894){var state_val_18895 = (state_18894[1]);if((state_val_18895 === 32))
{var inst_18762 = (state_18894[7]);var inst_18838 = (state_18894[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18894,31,Object,null,30);var inst_18845 = cljs.core.async.put_BANG_.call(null,inst_18838,inst_18762,done);var state_18894__$1 = state_18894;var statearr_18896_18981 = state_18894__$1;(statearr_18896_18981[2] = inst_18845);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18894__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 1))
{var state_18894__$1 = state_18894;var statearr_18897_18982 = state_18894__$1;(statearr_18897_18982[2] = null);
(statearr_18897_18982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 33))
{var inst_18851 = (state_18894[9]);var inst_18853 = cljs.core.chunked_seq_QMARK_.call(null,inst_18851);var state_18894__$1 = state_18894;if(inst_18853)
{var statearr_18898_18983 = state_18894__$1;(statearr_18898_18983[1] = 36);
} else
{var statearr_18899_18984 = state_18894__$1;(statearr_18899_18984[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 2))
{var state_18894__$1 = state_18894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18894__$1,4,ch);
} else
{if((state_val_18895 === 34))
{var state_18894__$1 = state_18894;var statearr_18900_18985 = state_18894__$1;(statearr_18900_18985[2] = null);
(statearr_18900_18985[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 3))
{var inst_18892 = (state_18894[2]);var state_18894__$1 = state_18894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18894__$1,inst_18892);
} else
{if((state_val_18895 === 35))
{var inst_18876 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18901_18986 = state_18894__$1;(statearr_18901_18986[2] = inst_18876);
(statearr_18901_18986[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 4))
{var inst_18762 = (state_18894[7]);var inst_18762__$1 = (state_18894[2]);var inst_18763 = (inst_18762__$1 == null);var state_18894__$1 = (function (){var statearr_18902 = state_18894;(statearr_18902[7] = inst_18762__$1);
return statearr_18902;
})();if(cljs.core.truth_(inst_18763))
{var statearr_18903_18987 = state_18894__$1;(statearr_18903_18987[1] = 5);
} else
{var statearr_18904_18988 = state_18894__$1;(statearr_18904_18988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 36))
{var inst_18851 = (state_18894[9]);var inst_18855 = cljs.core.chunk_first.call(null,inst_18851);var inst_18856 = cljs.core.chunk_rest.call(null,inst_18851);var inst_18857 = cljs.core.count.call(null,inst_18855);var inst_18830 = inst_18856;var inst_18831 = inst_18855;var inst_18832 = inst_18857;var inst_18833 = 0;var state_18894__$1 = (function (){var statearr_18905 = state_18894;(statearr_18905[10] = inst_18833);
(statearr_18905[11] = inst_18831);
(statearr_18905[12] = inst_18832);
(statearr_18905[13] = inst_18830);
return statearr_18905;
})();var statearr_18906_18989 = state_18894__$1;(statearr_18906_18989[2] = null);
(statearr_18906_18989[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 5))
{var inst_18769 = cljs.core.deref.call(null,cs);var inst_18770 = cljs.core.seq.call(null,inst_18769);var inst_18771 = inst_18770;var inst_18772 = null;var inst_18773 = 0;var inst_18774 = 0;var state_18894__$1 = (function (){var statearr_18907 = state_18894;(statearr_18907[14] = inst_18774);
(statearr_18907[15] = inst_18771);
(statearr_18907[16] = inst_18773);
(statearr_18907[17] = inst_18772);
return statearr_18907;
})();var statearr_18908_18990 = state_18894__$1;(statearr_18908_18990[2] = null);
(statearr_18908_18990[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 37))
{var inst_18851 = (state_18894[9]);var inst_18860 = cljs.core.first.call(null,inst_18851);var state_18894__$1 = (function (){var statearr_18909 = state_18894;(statearr_18909[18] = inst_18860);
return statearr_18909;
})();var statearr_18910_18991 = state_18894__$1;(statearr_18910_18991[2] = null);
(statearr_18910_18991[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 6))
{var inst_18822 = (state_18894[19]);var inst_18821 = cljs.core.deref.call(null,cs);var inst_18822__$1 = cljs.core.keys.call(null,inst_18821);var inst_18823 = cljs.core.count.call(null,inst_18822__$1);var inst_18824 = cljs.core.reset_BANG_.call(null,dctr,inst_18823);var inst_18829 = cljs.core.seq.call(null,inst_18822__$1);var inst_18830 = inst_18829;var inst_18831 = null;var inst_18832 = 0;var inst_18833 = 0;var state_18894__$1 = (function (){var statearr_18911 = state_18894;(statearr_18911[10] = inst_18833);
(statearr_18911[11] = inst_18831);
(statearr_18911[12] = inst_18832);
(statearr_18911[13] = inst_18830);
(statearr_18911[20] = inst_18824);
(statearr_18911[19] = inst_18822__$1);
return statearr_18911;
})();var statearr_18912_18992 = state_18894__$1;(statearr_18912_18992[2] = null);
(statearr_18912_18992[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 38))
{var inst_18873 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18913_18993 = state_18894__$1;(statearr_18913_18993[2] = inst_18873);
(statearr_18913_18993[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 7))
{var inst_18890 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18914_18994 = state_18894__$1;(statearr_18914_18994[2] = inst_18890);
(statearr_18914_18994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 39))
{var inst_18851 = (state_18894[9]);var inst_18869 = (state_18894[2]);var inst_18870 = cljs.core.next.call(null,inst_18851);var inst_18830 = inst_18870;var inst_18831 = null;var inst_18832 = 0;var inst_18833 = 0;var state_18894__$1 = (function (){var statearr_18915 = state_18894;(statearr_18915[10] = inst_18833);
(statearr_18915[11] = inst_18831);
(statearr_18915[12] = inst_18832);
(statearr_18915[13] = inst_18830);
(statearr_18915[21] = inst_18869);
return statearr_18915;
})();var statearr_18916_18995 = state_18894__$1;(statearr_18916_18995[2] = null);
(statearr_18916_18995[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 8))
{var inst_18774 = (state_18894[14]);var inst_18773 = (state_18894[16]);var inst_18776 = (inst_18774 < inst_18773);var inst_18777 = inst_18776;var state_18894__$1 = state_18894;if(cljs.core.truth_(inst_18777))
{var statearr_18917_18996 = state_18894__$1;(statearr_18917_18996[1] = 10);
} else
{var statearr_18918_18997 = state_18894__$1;(statearr_18918_18997[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 40))
{var inst_18860 = (state_18894[18]);var inst_18861 = (state_18894[2]);var inst_18862 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18863 = cljs.core.async.untap_STAR_.call(null,m,inst_18860);var state_18894__$1 = (function (){var statearr_18919 = state_18894;(statearr_18919[22] = inst_18862);
(statearr_18919[23] = inst_18861);
return statearr_18919;
})();var statearr_18920_18998 = state_18894__$1;(statearr_18920_18998[2] = inst_18863);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18894__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 9))
{var inst_18819 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18921_18999 = state_18894__$1;(statearr_18921_18999[2] = inst_18819);
(statearr_18921_18999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 41))
{var inst_18762 = (state_18894[7]);var inst_18860 = (state_18894[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18894,40,Object,null,39);var inst_18867 = cljs.core.async.put_BANG_.call(null,inst_18860,inst_18762,done);var state_18894__$1 = state_18894;var statearr_18922_19000 = state_18894__$1;(statearr_18922_19000[2] = inst_18867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18894__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 10))
{var inst_18774 = (state_18894[14]);var inst_18772 = (state_18894[17]);var inst_18780 = cljs.core._nth.call(null,inst_18772,inst_18774);var inst_18781 = cljs.core.nth.call(null,inst_18780,0,null);var inst_18782 = cljs.core.nth.call(null,inst_18780,1,null);var state_18894__$1 = (function (){var statearr_18923 = state_18894;(statearr_18923[24] = inst_18781);
return statearr_18923;
})();if(cljs.core.truth_(inst_18782))
{var statearr_18924_19001 = state_18894__$1;(statearr_18924_19001[1] = 13);
} else
{var statearr_18925_19002 = state_18894__$1;(statearr_18925_19002[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 42))
{var state_18894__$1 = state_18894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18894__$1,45,dchan);
} else
{if((state_val_18895 === 11))
{var inst_18791 = (state_18894[25]);var inst_18771 = (state_18894[15]);var inst_18791__$1 = cljs.core.seq.call(null,inst_18771);var state_18894__$1 = (function (){var statearr_18926 = state_18894;(statearr_18926[25] = inst_18791__$1);
return statearr_18926;
})();if(inst_18791__$1)
{var statearr_18927_19003 = state_18894__$1;(statearr_18927_19003[1] = 16);
} else
{var statearr_18928_19004 = state_18894__$1;(statearr_18928_19004[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 43))
{var state_18894__$1 = state_18894;var statearr_18929_19005 = state_18894__$1;(statearr_18929_19005[2] = null);
(statearr_18929_19005[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 12))
{var inst_18817 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18930_19006 = state_18894__$1;(statearr_18930_19006[2] = inst_18817);
(statearr_18930_19006[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 44))
{var inst_18887 = (state_18894[2]);var state_18894__$1 = (function (){var statearr_18931 = state_18894;(statearr_18931[26] = inst_18887);
return statearr_18931;
})();var statearr_18932_19007 = state_18894__$1;(statearr_18932_19007[2] = null);
(statearr_18932_19007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 13))
{var inst_18781 = (state_18894[24]);var inst_18784 = cljs.core.async.close_BANG_.call(null,inst_18781);var state_18894__$1 = state_18894;var statearr_18933_19008 = state_18894__$1;(statearr_18933_19008[2] = inst_18784);
(statearr_18933_19008[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 45))
{var inst_18884 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18937_19009 = state_18894__$1;(statearr_18937_19009[2] = inst_18884);
(statearr_18937_19009[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 14))
{var state_18894__$1 = state_18894;var statearr_18938_19010 = state_18894__$1;(statearr_18938_19010[2] = null);
(statearr_18938_19010[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 15))
{var inst_18774 = (state_18894[14]);var inst_18771 = (state_18894[15]);var inst_18773 = (state_18894[16]);var inst_18772 = (state_18894[17]);var inst_18787 = (state_18894[2]);var inst_18788 = (inst_18774 + 1);var tmp18934 = inst_18771;var tmp18935 = inst_18773;var tmp18936 = inst_18772;var inst_18771__$1 = tmp18934;var inst_18772__$1 = tmp18936;var inst_18773__$1 = tmp18935;var inst_18774__$1 = inst_18788;var state_18894__$1 = (function (){var statearr_18939 = state_18894;(statearr_18939[14] = inst_18774__$1);
(statearr_18939[15] = inst_18771__$1);
(statearr_18939[16] = inst_18773__$1);
(statearr_18939[17] = inst_18772__$1);
(statearr_18939[27] = inst_18787);
return statearr_18939;
})();var statearr_18940_19011 = state_18894__$1;(statearr_18940_19011[2] = null);
(statearr_18940_19011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 16))
{var inst_18791 = (state_18894[25]);var inst_18793 = cljs.core.chunked_seq_QMARK_.call(null,inst_18791);var state_18894__$1 = state_18894;if(inst_18793)
{var statearr_18941_19012 = state_18894__$1;(statearr_18941_19012[1] = 19);
} else
{var statearr_18942_19013 = state_18894__$1;(statearr_18942_19013[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 17))
{var state_18894__$1 = state_18894;var statearr_18943_19014 = state_18894__$1;(statearr_18943_19014[2] = null);
(statearr_18943_19014[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 18))
{var inst_18815 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18944_19015 = state_18894__$1;(statearr_18944_19015[2] = inst_18815);
(statearr_18944_19015[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 19))
{var inst_18791 = (state_18894[25]);var inst_18795 = cljs.core.chunk_first.call(null,inst_18791);var inst_18796 = cljs.core.chunk_rest.call(null,inst_18791);var inst_18797 = cljs.core.count.call(null,inst_18795);var inst_18771 = inst_18796;var inst_18772 = inst_18795;var inst_18773 = inst_18797;var inst_18774 = 0;var state_18894__$1 = (function (){var statearr_18945 = state_18894;(statearr_18945[14] = inst_18774);
(statearr_18945[15] = inst_18771);
(statearr_18945[16] = inst_18773);
(statearr_18945[17] = inst_18772);
return statearr_18945;
})();var statearr_18946_19016 = state_18894__$1;(statearr_18946_19016[2] = null);
(statearr_18946_19016[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 20))
{var inst_18791 = (state_18894[25]);var inst_18801 = cljs.core.first.call(null,inst_18791);var inst_18802 = cljs.core.nth.call(null,inst_18801,0,null);var inst_18803 = cljs.core.nth.call(null,inst_18801,1,null);var state_18894__$1 = (function (){var statearr_18947 = state_18894;(statearr_18947[28] = inst_18802);
return statearr_18947;
})();if(cljs.core.truth_(inst_18803))
{var statearr_18948_19017 = state_18894__$1;(statearr_18948_19017[1] = 22);
} else
{var statearr_18949_19018 = state_18894__$1;(statearr_18949_19018[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 21))
{var inst_18812 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18950_19019 = state_18894__$1;(statearr_18950_19019[2] = inst_18812);
(statearr_18950_19019[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 22))
{var inst_18802 = (state_18894[28]);var inst_18805 = cljs.core.async.close_BANG_.call(null,inst_18802);var state_18894__$1 = state_18894;var statearr_18951_19020 = state_18894__$1;(statearr_18951_19020[2] = inst_18805);
(statearr_18951_19020[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 23))
{var state_18894__$1 = state_18894;var statearr_18952_19021 = state_18894__$1;(statearr_18952_19021[2] = null);
(statearr_18952_19021[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 24))
{var inst_18791 = (state_18894[25]);var inst_18808 = (state_18894[2]);var inst_18809 = cljs.core.next.call(null,inst_18791);var inst_18771 = inst_18809;var inst_18772 = null;var inst_18773 = 0;var inst_18774 = 0;var state_18894__$1 = (function (){var statearr_18953 = state_18894;(statearr_18953[14] = inst_18774);
(statearr_18953[15] = inst_18771);
(statearr_18953[16] = inst_18773);
(statearr_18953[17] = inst_18772);
(statearr_18953[29] = inst_18808);
return statearr_18953;
})();var statearr_18954_19022 = state_18894__$1;(statearr_18954_19022[2] = null);
(statearr_18954_19022[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 25))
{var inst_18833 = (state_18894[10]);var inst_18832 = (state_18894[12]);var inst_18835 = (inst_18833 < inst_18832);var inst_18836 = inst_18835;var state_18894__$1 = state_18894;if(cljs.core.truth_(inst_18836))
{var statearr_18955_19023 = state_18894__$1;(statearr_18955_19023[1] = 27);
} else
{var statearr_18956_19024 = state_18894__$1;(statearr_18956_19024[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 26))
{var inst_18822 = (state_18894[19]);var inst_18880 = (state_18894[2]);var inst_18881 = cljs.core.seq.call(null,inst_18822);var state_18894__$1 = (function (){var statearr_18957 = state_18894;(statearr_18957[30] = inst_18880);
return statearr_18957;
})();if(inst_18881)
{var statearr_18958_19025 = state_18894__$1;(statearr_18958_19025[1] = 42);
} else
{var statearr_18959_19026 = state_18894__$1;(statearr_18959_19026[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 27))
{var inst_18833 = (state_18894[10]);var inst_18831 = (state_18894[11]);var inst_18838 = cljs.core._nth.call(null,inst_18831,inst_18833);var state_18894__$1 = (function (){var statearr_18960 = state_18894;(statearr_18960[8] = inst_18838);
return statearr_18960;
})();var statearr_18961_19027 = state_18894__$1;(statearr_18961_19027[2] = null);
(statearr_18961_19027[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 28))
{var inst_18851 = (state_18894[9]);var inst_18830 = (state_18894[13]);var inst_18851__$1 = cljs.core.seq.call(null,inst_18830);var state_18894__$1 = (function (){var statearr_18965 = state_18894;(statearr_18965[9] = inst_18851__$1);
return statearr_18965;
})();if(inst_18851__$1)
{var statearr_18966_19028 = state_18894__$1;(statearr_18966_19028[1] = 33);
} else
{var statearr_18967_19029 = state_18894__$1;(statearr_18967_19029[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 29))
{var inst_18878 = (state_18894[2]);var state_18894__$1 = state_18894;var statearr_18968_19030 = state_18894__$1;(statearr_18968_19030[2] = inst_18878);
(statearr_18968_19030[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 30))
{var inst_18833 = (state_18894[10]);var inst_18831 = (state_18894[11]);var inst_18832 = (state_18894[12]);var inst_18830 = (state_18894[13]);var inst_18847 = (state_18894[2]);var inst_18848 = (inst_18833 + 1);var tmp18962 = inst_18831;var tmp18963 = inst_18832;var tmp18964 = inst_18830;var inst_18830__$1 = tmp18964;var inst_18831__$1 = tmp18962;var inst_18832__$1 = tmp18963;var inst_18833__$1 = inst_18848;var state_18894__$1 = (function (){var statearr_18969 = state_18894;(statearr_18969[31] = inst_18847);
(statearr_18969[10] = inst_18833__$1);
(statearr_18969[11] = inst_18831__$1);
(statearr_18969[12] = inst_18832__$1);
(statearr_18969[13] = inst_18830__$1);
return statearr_18969;
})();var statearr_18970_19031 = state_18894__$1;(statearr_18970_19031[2] = null);
(statearr_18970_19031[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 31))
{var inst_18838 = (state_18894[8]);var inst_18839 = (state_18894[2]);var inst_18840 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18841 = cljs.core.async.untap_STAR_.call(null,m,inst_18838);var state_18894__$1 = (function (){var statearr_18971 = state_18894;(statearr_18971[32] = inst_18840);
(statearr_18971[33] = inst_18839);
return statearr_18971;
})();var statearr_18972_19032 = state_18894__$1;(statearr_18972_19032[2] = inst_18841);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18894__$1);
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
var state_machine__8407__auto____0 = (function (){var statearr_18976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18976[0] = state_machine__8407__auto__);
(statearr_18976[1] = 1);
return statearr_18976;
});
var state_machine__8407__auto____1 = (function (state_18894){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_18894);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e18977){if((e18977 instanceof Object))
{var ex__8410__auto__ = e18977;var statearr_18978_19033 = state_18894;(statearr_18978_19033[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19034 = state_18894;
state_18894 = G__19034;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_18894){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_18894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_18979 = f__8561__auto__.call(null);(statearr_18979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___18980);
return statearr_18979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj19036 = {};return obj19036;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4912__auto__ = m;if(and__4912__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5545__auto__ = (((m == null))?null:m);return (function (){var or__4924__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19146 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19147){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta19147 = meta19147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19146.cljs$lang$type = true;
cljs.core.async.t19146.cljs$lang$ctorStr = "cljs.core.async/t19146";
cljs.core.async.t19146.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t19146");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19146.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19148){var self__ = this;
var _19148__$1 = this;return self__.meta19147;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19148,meta19147__$1){var self__ = this;
var _19148__$1 = this;return (new cljs.core.async.t19146(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19147__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19146 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19146(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19147){return (new cljs.core.async.t19146(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19147));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19146(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8560__auto___19255 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_19213){var state_val_19214 = (state_19213[1]);if((state_val_19214 === 1))
{var inst_19152 = (state_19213[7]);var inst_19152__$1 = calc_state.call(null);var inst_19153 = cljs.core.seq_QMARK_.call(null,inst_19152__$1);var state_19213__$1 = (function (){var statearr_19215 = state_19213;(statearr_19215[7] = inst_19152__$1);
return statearr_19215;
})();if(inst_19153)
{var statearr_19216_19256 = state_19213__$1;(statearr_19216_19256[1] = 2);
} else
{var statearr_19217_19257 = state_19213__$1;(statearr_19217_19257[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 2))
{var inst_19152 = (state_19213[7]);var inst_19155 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19152);var state_19213__$1 = state_19213;var statearr_19218_19258 = state_19213__$1;(statearr_19218_19258[2] = inst_19155);
(statearr_19218_19258[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 3))
{var inst_19152 = (state_19213[7]);var state_19213__$1 = state_19213;var statearr_19219_19259 = state_19213__$1;(statearr_19219_19259[2] = inst_19152);
(statearr_19219_19259[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 4))
{var inst_19152 = (state_19213[7]);var inst_19158 = (state_19213[2]);var inst_19159 = cljs.core.get.call(null,inst_19158,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19160 = cljs.core.get.call(null,inst_19158,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19161 = cljs.core.get.call(null,inst_19158,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_19162 = inst_19152;var state_19213__$1 = (function (){var statearr_19220 = state_19213;(statearr_19220[8] = inst_19162);
(statearr_19220[9] = inst_19161);
(statearr_19220[10] = inst_19160);
(statearr_19220[11] = inst_19159);
return statearr_19220;
})();var statearr_19221_19260 = state_19213__$1;(statearr_19221_19260[2] = null);
(statearr_19221_19260[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 5))
{var inst_19162 = (state_19213[8]);var inst_19165 = cljs.core.seq_QMARK_.call(null,inst_19162);var state_19213__$1 = state_19213;if(inst_19165)
{var statearr_19222_19261 = state_19213__$1;(statearr_19222_19261[1] = 7);
} else
{var statearr_19223_19262 = state_19213__$1;(statearr_19223_19262[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 6))
{var inst_19211 = (state_19213[2]);var state_19213__$1 = state_19213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19213__$1,inst_19211);
} else
{if((state_val_19214 === 7))
{var inst_19162 = (state_19213[8]);var inst_19167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19162);var state_19213__$1 = state_19213;var statearr_19224_19263 = state_19213__$1;(statearr_19224_19263[2] = inst_19167);
(statearr_19224_19263[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 8))
{var inst_19162 = (state_19213[8]);var state_19213__$1 = state_19213;var statearr_19225_19264 = state_19213__$1;(statearr_19225_19264[2] = inst_19162);
(statearr_19225_19264[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 9))
{var inst_19170 = (state_19213[12]);var inst_19170__$1 = (state_19213[2]);var inst_19171 = cljs.core.get.call(null,inst_19170__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19172 = cljs.core.get.call(null,inst_19170__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19173 = cljs.core.get.call(null,inst_19170__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_19213__$1 = (function (){var statearr_19226 = state_19213;(statearr_19226[13] = inst_19173);
(statearr_19226[14] = inst_19172);
(statearr_19226[12] = inst_19170__$1);
return statearr_19226;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19213__$1,10,inst_19171);
} else
{if((state_val_19214 === 10))
{var inst_19178 = (state_19213[15]);var inst_19177 = (state_19213[16]);var inst_19176 = (state_19213[2]);var inst_19177__$1 = cljs.core.nth.call(null,inst_19176,0,null);var inst_19178__$1 = cljs.core.nth.call(null,inst_19176,1,null);var inst_19179 = (inst_19177__$1 == null);var inst_19180 = cljs.core._EQ_.call(null,inst_19178__$1,change);var inst_19181 = (inst_19179) || (inst_19180);var state_19213__$1 = (function (){var statearr_19227 = state_19213;(statearr_19227[15] = inst_19178__$1);
(statearr_19227[16] = inst_19177__$1);
return statearr_19227;
})();if(cljs.core.truth_(inst_19181))
{var statearr_19228_19265 = state_19213__$1;(statearr_19228_19265[1] = 11);
} else
{var statearr_19229_19266 = state_19213__$1;(statearr_19229_19266[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 11))
{var inst_19177 = (state_19213[16]);var inst_19183 = (inst_19177 == null);var state_19213__$1 = state_19213;if(cljs.core.truth_(inst_19183))
{var statearr_19230_19267 = state_19213__$1;(statearr_19230_19267[1] = 14);
} else
{var statearr_19231_19268 = state_19213__$1;(statearr_19231_19268[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 12))
{var inst_19178 = (state_19213[15]);var inst_19192 = (state_19213[17]);var inst_19173 = (state_19213[13]);var inst_19192__$1 = inst_19173.call(null,inst_19178);var state_19213__$1 = (function (){var statearr_19232 = state_19213;(statearr_19232[17] = inst_19192__$1);
return statearr_19232;
})();if(cljs.core.truth_(inst_19192__$1))
{var statearr_19233_19269 = state_19213__$1;(statearr_19233_19269[1] = 17);
} else
{var statearr_19234_19270 = state_19213__$1;(statearr_19234_19270[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 13))
{var inst_19209 = (state_19213[2]);var state_19213__$1 = state_19213;var statearr_19235_19271 = state_19213__$1;(statearr_19235_19271[2] = inst_19209);
(statearr_19235_19271[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 14))
{var inst_19178 = (state_19213[15]);var inst_19185 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19178);var state_19213__$1 = state_19213;var statearr_19236_19272 = state_19213__$1;(statearr_19236_19272[2] = inst_19185);
(statearr_19236_19272[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 15))
{var state_19213__$1 = state_19213;var statearr_19237_19273 = state_19213__$1;(statearr_19237_19273[2] = null);
(statearr_19237_19273[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 16))
{var inst_19188 = (state_19213[2]);var inst_19189 = calc_state.call(null);var inst_19162 = inst_19189;var state_19213__$1 = (function (){var statearr_19238 = state_19213;(statearr_19238[8] = inst_19162);
(statearr_19238[18] = inst_19188);
return statearr_19238;
})();var statearr_19239_19274 = state_19213__$1;(statearr_19239_19274[2] = null);
(statearr_19239_19274[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 17))
{var inst_19192 = (state_19213[17]);var state_19213__$1 = state_19213;var statearr_19240_19275 = state_19213__$1;(statearr_19240_19275[2] = inst_19192);
(statearr_19240_19275[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 18))
{var inst_19178 = (state_19213[15]);var inst_19173 = (state_19213[13]);var inst_19172 = (state_19213[14]);var inst_19195 = cljs.core.empty_QMARK_.call(null,inst_19173);var inst_19196 = inst_19172.call(null,inst_19178);var inst_19197 = cljs.core.not.call(null,inst_19196);var inst_19198 = (inst_19195) && (inst_19197);var state_19213__$1 = state_19213;var statearr_19241_19276 = state_19213__$1;(statearr_19241_19276[2] = inst_19198);
(statearr_19241_19276[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 19))
{var inst_19200 = (state_19213[2]);var state_19213__$1 = state_19213;if(cljs.core.truth_(inst_19200))
{var statearr_19242_19277 = state_19213__$1;(statearr_19242_19277[1] = 20);
} else
{var statearr_19243_19278 = state_19213__$1;(statearr_19243_19278[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 20))
{var inst_19177 = (state_19213[16]);var state_19213__$1 = state_19213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19213__$1,23,out,inst_19177);
} else
{if((state_val_19214 === 21))
{var state_19213__$1 = state_19213;var statearr_19244_19279 = state_19213__$1;(statearr_19244_19279[2] = null);
(statearr_19244_19279[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 22))
{var inst_19170 = (state_19213[12]);var inst_19206 = (state_19213[2]);var inst_19162 = inst_19170;var state_19213__$1 = (function (){var statearr_19245 = state_19213;(statearr_19245[8] = inst_19162);
(statearr_19245[19] = inst_19206);
return statearr_19245;
})();var statearr_19246_19280 = state_19213__$1;(statearr_19246_19280[2] = null);
(statearr_19246_19280[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19214 === 23))
{var inst_19203 = (state_19213[2]);var state_19213__$1 = state_19213;var statearr_19247_19281 = state_19213__$1;(statearr_19247_19281[2] = inst_19203);
(statearr_19247_19281[1] = 22);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_19251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19251[0] = state_machine__8407__auto__);
(statearr_19251[1] = 1);
return statearr_19251;
});
var state_machine__8407__auto____1 = (function (state_19213){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_19213);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e19252){if((e19252 instanceof Object))
{var ex__8410__auto__ = e19252;var statearr_19253_19282 = state_19213;(statearr_19253_19282[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19283 = state_19213;
state_19213 = G__19283;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_19213){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_19213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_19254 = f__8561__auto__.call(null);(statearr_19254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___19255);
return statearr_19254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj19285 = {};return obj19285;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4912__auto__ = p;if(and__4912__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4912__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5545__auto__ = (((p == null))?null:p);return (function (){var or__4924__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4912__auto__ = p;if(and__4912__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4912__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5545__auto__ = (((p == null))?null:p);return (function (){var or__4924__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4912__auto__ = p;if(and__4912__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4912__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5545__auto__ = (((p == null))?null:p);return (function (){var or__4924__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4912__auto__ = p;if(and__4912__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4912__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5545__auto__ = (((p == null))?null:p);return (function (){var or__4924__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5545__auto__)]);if(or__4924__auto__)
{return or__4924__auto__;
} else
{var or__4924__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4924__auto____$1)
{return or__4924__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4924__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4924__auto__))
{return or__4924__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4924__auto__,mults){
return (function (p1__19286_SHARP_){if(cljs.core.truth_(p1__19286_SHARP_.call(null,topic)))
{return p1__19286_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19286_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4924__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19411 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19411 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19412){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19412 = meta19412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19411.cljs$lang$type = true;
cljs.core.async.t19411.cljs$lang$ctorStr = "cljs.core.async/t19411";
cljs.core.async.t19411.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5486__auto__,writer__5487__auto__,opt__5488__auto__){return cljs.core._write.call(null,writer__5487__auto__,"cljs.core.async/t19411");
});})(mults,ensure_mult))
;
cljs.core.async.t19411.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19411.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19411.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19411.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19411.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19411.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19413){var self__ = this;
var _19413__$1 = this;return self__.meta19412;
});})(mults,ensure_mult))
;
cljs.core.async.t19411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19413,meta19412__$1){var self__ = this;
var _19413__$1 = this;return (new cljs.core.async.t19411(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19412__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19411 = ((function (mults,ensure_mult){
return (function __GT_t19411(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19412){return (new cljs.core.async.t19411(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19412));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19411(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8560__auto___19535 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_19487){var state_val_19488 = (state_19487[1]);if((state_val_19488 === 1))
{var state_19487__$1 = state_19487;var statearr_19489_19536 = state_19487__$1;(statearr_19489_19536[2] = null);
(statearr_19489_19536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 2))
{var state_19487__$1 = state_19487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19487__$1,4,ch);
} else
{if((state_val_19488 === 3))
{var inst_19485 = (state_19487[2]);var state_19487__$1 = state_19487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19487__$1,inst_19485);
} else
{if((state_val_19488 === 4))
{var inst_19416 = (state_19487[7]);var inst_19416__$1 = (state_19487[2]);var inst_19417 = (inst_19416__$1 == null);var state_19487__$1 = (function (){var statearr_19490 = state_19487;(statearr_19490[7] = inst_19416__$1);
return statearr_19490;
})();if(cljs.core.truth_(inst_19417))
{var statearr_19491_19537 = state_19487__$1;(statearr_19491_19537[1] = 5);
} else
{var statearr_19492_19538 = state_19487__$1;(statearr_19492_19538[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 5))
{var inst_19423 = cljs.core.deref.call(null,mults);var inst_19424 = cljs.core.vals.call(null,inst_19423);var inst_19425 = cljs.core.seq.call(null,inst_19424);var inst_19426 = inst_19425;var inst_19427 = null;var inst_19428 = 0;var inst_19429 = 0;var state_19487__$1 = (function (){var statearr_19493 = state_19487;(statearr_19493[8] = inst_19429);
(statearr_19493[9] = inst_19428);
(statearr_19493[10] = inst_19427);
(statearr_19493[11] = inst_19426);
return statearr_19493;
})();var statearr_19494_19539 = state_19487__$1;(statearr_19494_19539[2] = null);
(statearr_19494_19539[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 6))
{var inst_19464 = (state_19487[12]);var inst_19466 = (state_19487[13]);var inst_19416 = (state_19487[7]);var inst_19464__$1 = topic_fn.call(null,inst_19416);var inst_19465 = cljs.core.deref.call(null,mults);var inst_19466__$1 = cljs.core.get.call(null,inst_19465,inst_19464__$1);var state_19487__$1 = (function (){var statearr_19495 = state_19487;(statearr_19495[12] = inst_19464__$1);
(statearr_19495[13] = inst_19466__$1);
return statearr_19495;
})();if(cljs.core.truth_(inst_19466__$1))
{var statearr_19496_19540 = state_19487__$1;(statearr_19496_19540[1] = 19);
} else
{var statearr_19497_19541 = state_19487__$1;(statearr_19497_19541[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 7))
{var inst_19483 = (state_19487[2]);var state_19487__$1 = state_19487;var statearr_19498_19542 = state_19487__$1;(statearr_19498_19542[2] = inst_19483);
(statearr_19498_19542[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 8))
{var inst_19429 = (state_19487[8]);var inst_19428 = (state_19487[9]);var inst_19431 = (inst_19429 < inst_19428);var inst_19432 = inst_19431;var state_19487__$1 = state_19487;if(cljs.core.truth_(inst_19432))
{var statearr_19502_19543 = state_19487__$1;(statearr_19502_19543[1] = 10);
} else
{var statearr_19503_19544 = state_19487__$1;(statearr_19503_19544[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 9))
{var inst_19462 = (state_19487[2]);var state_19487__$1 = state_19487;var statearr_19504_19545 = state_19487__$1;(statearr_19504_19545[2] = inst_19462);
(statearr_19504_19545[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 10))
{var inst_19429 = (state_19487[8]);var inst_19428 = (state_19487[9]);var inst_19427 = (state_19487[10]);var inst_19426 = (state_19487[11]);var inst_19434 = cljs.core._nth.call(null,inst_19427,inst_19429);var inst_19435 = cljs.core.async.muxch_STAR_.call(null,inst_19434);var inst_19436 = cljs.core.async.close_BANG_.call(null,inst_19435);var inst_19437 = (inst_19429 + 1);var tmp19499 = inst_19428;var tmp19500 = inst_19427;var tmp19501 = inst_19426;var inst_19426__$1 = tmp19501;var inst_19427__$1 = tmp19500;var inst_19428__$1 = tmp19499;var inst_19429__$1 = inst_19437;var state_19487__$1 = (function (){var statearr_19505 = state_19487;(statearr_19505[8] = inst_19429__$1);
(statearr_19505[9] = inst_19428__$1);
(statearr_19505[10] = inst_19427__$1);
(statearr_19505[11] = inst_19426__$1);
(statearr_19505[14] = inst_19436);
return statearr_19505;
})();var statearr_19506_19546 = state_19487__$1;(statearr_19506_19546[2] = null);
(statearr_19506_19546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 11))
{var inst_19440 = (state_19487[15]);var inst_19426 = (state_19487[11]);var inst_19440__$1 = cljs.core.seq.call(null,inst_19426);var state_19487__$1 = (function (){var statearr_19507 = state_19487;(statearr_19507[15] = inst_19440__$1);
return statearr_19507;
})();if(inst_19440__$1)
{var statearr_19508_19547 = state_19487__$1;(statearr_19508_19547[1] = 13);
} else
{var statearr_19509_19548 = state_19487__$1;(statearr_19509_19548[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 12))
{var inst_19460 = (state_19487[2]);var state_19487__$1 = state_19487;var statearr_19510_19549 = state_19487__$1;(statearr_19510_19549[2] = inst_19460);
(statearr_19510_19549[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 13))
{var inst_19440 = (state_19487[15]);var inst_19442 = cljs.core.chunked_seq_QMARK_.call(null,inst_19440);var state_19487__$1 = state_19487;if(inst_19442)
{var statearr_19511_19550 = state_19487__$1;(statearr_19511_19550[1] = 16);
} else
{var statearr_19512_19551 = state_19487__$1;(statearr_19512_19551[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 14))
{var state_19487__$1 = state_19487;var statearr_19513_19552 = state_19487__$1;(statearr_19513_19552[2] = null);
(statearr_19513_19552[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 15))
{var inst_19458 = (state_19487[2]);var state_19487__$1 = state_19487;var statearr_19514_19553 = state_19487__$1;(statearr_19514_19553[2] = inst_19458);
(statearr_19514_19553[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 16))
{var inst_19440 = (state_19487[15]);var inst_19444 = cljs.core.chunk_first.call(null,inst_19440);var inst_19445 = cljs.core.chunk_rest.call(null,inst_19440);var inst_19446 = cljs.core.count.call(null,inst_19444);var inst_19426 = inst_19445;var inst_19427 = inst_19444;var inst_19428 = inst_19446;var inst_19429 = 0;var state_19487__$1 = (function (){var statearr_19515 = state_19487;(statearr_19515[8] = inst_19429);
(statearr_19515[9] = inst_19428);
(statearr_19515[10] = inst_19427);
(statearr_19515[11] = inst_19426);
return statearr_19515;
})();var statearr_19516_19554 = state_19487__$1;(statearr_19516_19554[2] = null);
(statearr_19516_19554[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 17))
{var inst_19440 = (state_19487[15]);var inst_19449 = cljs.core.first.call(null,inst_19440);var inst_19450 = cljs.core.async.muxch_STAR_.call(null,inst_19449);var inst_19451 = cljs.core.async.close_BANG_.call(null,inst_19450);var inst_19452 = cljs.core.next.call(null,inst_19440);var inst_19426 = inst_19452;var inst_19427 = null;var inst_19428 = 0;var inst_19429 = 0;var state_19487__$1 = (function (){var statearr_19517 = state_19487;(statearr_19517[8] = inst_19429);
(statearr_19517[9] = inst_19428);
(statearr_19517[10] = inst_19427);
(statearr_19517[11] = inst_19426);
(statearr_19517[16] = inst_19451);
return statearr_19517;
})();var statearr_19518_19555 = state_19487__$1;(statearr_19518_19555[2] = null);
(statearr_19518_19555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 18))
{var inst_19455 = (state_19487[2]);var state_19487__$1 = state_19487;var statearr_19519_19556 = state_19487__$1;(statearr_19519_19556[2] = inst_19455);
(statearr_19519_19556[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 19))
{var state_19487__$1 = state_19487;var statearr_19520_19557 = state_19487__$1;(statearr_19520_19557[2] = null);
(statearr_19520_19557[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 20))
{var state_19487__$1 = state_19487;var statearr_19521_19558 = state_19487__$1;(statearr_19521_19558[2] = null);
(statearr_19521_19558[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 21))
{var inst_19480 = (state_19487[2]);var state_19487__$1 = (function (){var statearr_19522 = state_19487;(statearr_19522[17] = inst_19480);
return statearr_19522;
})();var statearr_19523_19559 = state_19487__$1;(statearr_19523_19559[2] = null);
(statearr_19523_19559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 22))
{var inst_19477 = (state_19487[2]);var state_19487__$1 = state_19487;var statearr_19524_19560 = state_19487__$1;(statearr_19524_19560[2] = inst_19477);
(statearr_19524_19560[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 23))
{var inst_19464 = (state_19487[12]);var inst_19468 = (state_19487[2]);var inst_19469 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19464);var state_19487__$1 = (function (){var statearr_19525 = state_19487;(statearr_19525[18] = inst_19468);
return statearr_19525;
})();var statearr_19526_19561 = state_19487__$1;(statearr_19526_19561[2] = inst_19469);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19487__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19488 === 24))
{var inst_19466 = (state_19487[13]);var inst_19416 = (state_19487[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19487,23,Object,null,22);var inst_19473 = cljs.core.async.muxch_STAR_.call(null,inst_19466);var state_19487__$1 = state_19487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19487__$1,25,inst_19473,inst_19416);
} else
{if((state_val_19488 === 25))
{var inst_19475 = (state_19487[2]);var state_19487__$1 = state_19487;var statearr_19527_19562 = state_19487__$1;(statearr_19527_19562[2] = inst_19475);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19487__$1);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_19531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19531[0] = state_machine__8407__auto__);
(statearr_19531[1] = 1);
return statearr_19531;
});
var state_machine__8407__auto____1 = (function (state_19487){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_19487);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e19532){if((e19532 instanceof Object))
{var ex__8410__auto__ = e19532;var statearr_19533_19563 = state_19487;(statearr_19533_19563[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19564 = state_19487;
state_19487 = G__19564;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_19487){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_19487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_19534 = f__8561__auto__.call(null);(statearr_19534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___19535);
return statearr_19534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8560__auto___19701 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_19671){var state_val_19672 = (state_19671[1]);if((state_val_19672 === 1))
{var state_19671__$1 = state_19671;var statearr_19673_19702 = state_19671__$1;(statearr_19673_19702[2] = null);
(statearr_19673_19702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 2))
{var inst_19634 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19635 = 0;var state_19671__$1 = (function (){var statearr_19674 = state_19671;(statearr_19674[7] = inst_19634);
(statearr_19674[8] = inst_19635);
return statearr_19674;
})();var statearr_19675_19703 = state_19671__$1;(statearr_19675_19703[2] = null);
(statearr_19675_19703[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 3))
{var inst_19669 = (state_19671[2]);var state_19671__$1 = state_19671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19671__$1,inst_19669);
} else
{if((state_val_19672 === 4))
{var inst_19635 = (state_19671[8]);var inst_19637 = (inst_19635 < cnt);var state_19671__$1 = state_19671;if(cljs.core.truth_(inst_19637))
{var statearr_19676_19704 = state_19671__$1;(statearr_19676_19704[1] = 6);
} else
{var statearr_19677_19705 = state_19671__$1;(statearr_19677_19705[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 5))
{var inst_19655 = (state_19671[2]);var state_19671__$1 = (function (){var statearr_19678 = state_19671;(statearr_19678[9] = inst_19655);
return statearr_19678;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19671__$1,12,dchan);
} else
{if((state_val_19672 === 6))
{var state_19671__$1 = state_19671;var statearr_19679_19706 = state_19671__$1;(statearr_19679_19706[2] = null);
(statearr_19679_19706[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 7))
{var state_19671__$1 = state_19671;var statearr_19680_19707 = state_19671__$1;(statearr_19680_19707[2] = null);
(statearr_19680_19707[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 8))
{var inst_19653 = (state_19671[2]);var state_19671__$1 = state_19671;var statearr_19681_19708 = state_19671__$1;(statearr_19681_19708[2] = inst_19653);
(statearr_19681_19708[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 9))
{var inst_19635 = (state_19671[8]);var inst_19648 = (state_19671[2]);var inst_19649 = (inst_19635 + 1);var inst_19635__$1 = inst_19649;var state_19671__$1 = (function (){var statearr_19682 = state_19671;(statearr_19682[8] = inst_19635__$1);
(statearr_19682[10] = inst_19648);
return statearr_19682;
})();var statearr_19683_19709 = state_19671__$1;(statearr_19683_19709[2] = null);
(statearr_19683_19709[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 10))
{var inst_19639 = (state_19671[2]);var inst_19640 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19671__$1 = (function (){var statearr_19684 = state_19671;(statearr_19684[11] = inst_19639);
return statearr_19684;
})();var statearr_19685_19710 = state_19671__$1;(statearr_19685_19710[2] = inst_19640);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19671__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 11))
{var inst_19635 = (state_19671[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19671,10,Object,null,9);var inst_19644 = chs__$1.call(null,inst_19635);var inst_19645 = done.call(null,inst_19635);var inst_19646 = cljs.core.async.take_BANG_.call(null,inst_19644,inst_19645);var state_19671__$1 = state_19671;var statearr_19686_19711 = state_19671__$1;(statearr_19686_19711[2] = inst_19646);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19671__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 12))
{var inst_19657 = (state_19671[12]);var inst_19657__$1 = (state_19671[2]);var inst_19658 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19657__$1);var state_19671__$1 = (function (){var statearr_19687 = state_19671;(statearr_19687[12] = inst_19657__$1);
return statearr_19687;
})();if(cljs.core.truth_(inst_19658))
{var statearr_19688_19712 = state_19671__$1;(statearr_19688_19712[1] = 13);
} else
{var statearr_19689_19713 = state_19671__$1;(statearr_19689_19713[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 13))
{var inst_19660 = cljs.core.async.close_BANG_.call(null,out);var state_19671__$1 = state_19671;var statearr_19690_19714 = state_19671__$1;(statearr_19690_19714[2] = inst_19660);
(statearr_19690_19714[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 14))
{var inst_19657 = (state_19671[12]);var inst_19662 = cljs.core.apply.call(null,f,inst_19657);var state_19671__$1 = state_19671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19671__$1,16,out,inst_19662);
} else
{if((state_val_19672 === 15))
{var inst_19667 = (state_19671[2]);var state_19671__$1 = state_19671;var statearr_19691_19715 = state_19671__$1;(statearr_19691_19715[2] = inst_19667);
(statearr_19691_19715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19672 === 16))
{var inst_19664 = (state_19671[2]);var state_19671__$1 = (function (){var statearr_19692 = state_19671;(statearr_19692[13] = inst_19664);
return statearr_19692;
})();var statearr_19693_19716 = state_19671__$1;(statearr_19693_19716[2] = null);
(statearr_19693_19716[1] = 2);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_19697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19697[0] = state_machine__8407__auto__);
(statearr_19697[1] = 1);
return statearr_19697;
});
var state_machine__8407__auto____1 = (function (state_19671){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_19671);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e19698){if((e19698 instanceof Object))
{var ex__8410__auto__ = e19698;var statearr_19699_19717 = state_19671;(statearr_19699_19717[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19671);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19718 = state_19671;
state_19671 = G__19718;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_19671){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_19671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_19700 = f__8561__auto__.call(null);(statearr_19700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___19701);
return statearr_19700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8560__auto___19826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_19802){var state_val_19803 = (state_19802[1]);if((state_val_19803 === 1))
{var inst_19773 = cljs.core.vec.call(null,chs);var inst_19774 = inst_19773;var state_19802__$1 = (function (){var statearr_19804 = state_19802;(statearr_19804[7] = inst_19774);
return statearr_19804;
})();var statearr_19805_19827 = state_19802__$1;(statearr_19805_19827[2] = null);
(statearr_19805_19827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19803 === 2))
{var inst_19774 = (state_19802[7]);var inst_19776 = cljs.core.count.call(null,inst_19774);var inst_19777 = (inst_19776 > 0);var state_19802__$1 = state_19802;if(cljs.core.truth_(inst_19777))
{var statearr_19806_19828 = state_19802__$1;(statearr_19806_19828[1] = 4);
} else
{var statearr_19807_19829 = state_19802__$1;(statearr_19807_19829[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19803 === 3))
{var inst_19800 = (state_19802[2]);var state_19802__$1 = state_19802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19802__$1,inst_19800);
} else
{if((state_val_19803 === 4))
{var inst_19774 = (state_19802[7]);var state_19802__$1 = state_19802;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19802__$1,7,inst_19774);
} else
{if((state_val_19803 === 5))
{var inst_19796 = cljs.core.async.close_BANG_.call(null,out);var state_19802__$1 = state_19802;var statearr_19808_19830 = state_19802__$1;(statearr_19808_19830[2] = inst_19796);
(statearr_19808_19830[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19803 === 6))
{var inst_19798 = (state_19802[2]);var state_19802__$1 = state_19802;var statearr_19809_19831 = state_19802__$1;(statearr_19809_19831[2] = inst_19798);
(statearr_19809_19831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19803 === 7))
{var inst_19782 = (state_19802[8]);var inst_19781 = (state_19802[9]);var inst_19781__$1 = (state_19802[2]);var inst_19782__$1 = cljs.core.nth.call(null,inst_19781__$1,0,null);var inst_19783 = cljs.core.nth.call(null,inst_19781__$1,1,null);var inst_19784 = (inst_19782__$1 == null);var state_19802__$1 = (function (){var statearr_19810 = state_19802;(statearr_19810[10] = inst_19783);
(statearr_19810[8] = inst_19782__$1);
(statearr_19810[9] = inst_19781__$1);
return statearr_19810;
})();if(cljs.core.truth_(inst_19784))
{var statearr_19811_19832 = state_19802__$1;(statearr_19811_19832[1] = 8);
} else
{var statearr_19812_19833 = state_19802__$1;(statearr_19812_19833[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19803 === 8))
{var inst_19774 = (state_19802[7]);var inst_19783 = (state_19802[10]);var inst_19782 = (state_19802[8]);var inst_19781 = (state_19802[9]);var inst_19786 = (function (){var c = inst_19783;var v = inst_19782;var vec__19779 = inst_19781;var cs = inst_19774;return ((function (c,v,vec__19779,cs,inst_19774,inst_19783,inst_19782,inst_19781,state_val_19803){
return (function (p1__19719_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19719_SHARP_);
});
;})(c,v,vec__19779,cs,inst_19774,inst_19783,inst_19782,inst_19781,state_val_19803))
})();var inst_19787 = cljs.core.filterv.call(null,inst_19786,inst_19774);var inst_19774__$1 = inst_19787;var state_19802__$1 = (function (){var statearr_19813 = state_19802;(statearr_19813[7] = inst_19774__$1);
return statearr_19813;
})();var statearr_19814_19834 = state_19802__$1;(statearr_19814_19834[2] = null);
(statearr_19814_19834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19803 === 9))
{var inst_19782 = (state_19802[8]);var state_19802__$1 = state_19802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19802__$1,11,out,inst_19782);
} else
{if((state_val_19803 === 10))
{var inst_19794 = (state_19802[2]);var state_19802__$1 = state_19802;var statearr_19816_19835 = state_19802__$1;(statearr_19816_19835[2] = inst_19794);
(statearr_19816_19835[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19803 === 11))
{var inst_19774 = (state_19802[7]);var inst_19791 = (state_19802[2]);var tmp19815 = inst_19774;var inst_19774__$1 = tmp19815;var state_19802__$1 = (function (){var statearr_19817 = state_19802;(statearr_19817[7] = inst_19774__$1);
(statearr_19817[11] = inst_19791);
return statearr_19817;
})();var statearr_19818_19836 = state_19802__$1;(statearr_19818_19836[2] = null);
(statearr_19818_19836[1] = 2);
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
var state_machine__8407__auto____0 = (function (){var statearr_19822 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19822[0] = state_machine__8407__auto__);
(statearr_19822[1] = 1);
return statearr_19822;
});
var state_machine__8407__auto____1 = (function (state_19802){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_19802);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e19823){if((e19823 instanceof Object))
{var ex__8410__auto__ = e19823;var statearr_19824_19837 = state_19802;(statearr_19824_19837[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19838 = state_19802;
state_19802 = G__19838;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_19802){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_19802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_19825 = f__8561__auto__.call(null);(statearr_19825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___19826);
return statearr_19825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8560__auto___19931 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_19908){var state_val_19909 = (state_19908[1]);if((state_val_19909 === 1))
{var inst_19885 = 0;var state_19908__$1 = (function (){var statearr_19910 = state_19908;(statearr_19910[7] = inst_19885);
return statearr_19910;
})();var statearr_19911_19932 = state_19908__$1;(statearr_19911_19932[2] = null);
(statearr_19911_19932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19909 === 2))
{var inst_19885 = (state_19908[7]);var inst_19887 = (inst_19885 < n);var state_19908__$1 = state_19908;if(cljs.core.truth_(inst_19887))
{var statearr_19912_19933 = state_19908__$1;(statearr_19912_19933[1] = 4);
} else
{var statearr_19913_19934 = state_19908__$1;(statearr_19913_19934[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19909 === 3))
{var inst_19905 = (state_19908[2]);var inst_19906 = cljs.core.async.close_BANG_.call(null,out);var state_19908__$1 = (function (){var statearr_19914 = state_19908;(statearr_19914[8] = inst_19905);
return statearr_19914;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19908__$1,inst_19906);
} else
{if((state_val_19909 === 4))
{var state_19908__$1 = state_19908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19908__$1,7,ch);
} else
{if((state_val_19909 === 5))
{var state_19908__$1 = state_19908;var statearr_19915_19935 = state_19908__$1;(statearr_19915_19935[2] = null);
(statearr_19915_19935[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19909 === 6))
{var inst_19903 = (state_19908[2]);var state_19908__$1 = state_19908;var statearr_19916_19936 = state_19908__$1;(statearr_19916_19936[2] = inst_19903);
(statearr_19916_19936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19909 === 7))
{var inst_19890 = (state_19908[9]);var inst_19890__$1 = (state_19908[2]);var inst_19891 = (inst_19890__$1 == null);var inst_19892 = cljs.core.not.call(null,inst_19891);var state_19908__$1 = (function (){var statearr_19917 = state_19908;(statearr_19917[9] = inst_19890__$1);
return statearr_19917;
})();if(inst_19892)
{var statearr_19918_19937 = state_19908__$1;(statearr_19918_19937[1] = 8);
} else
{var statearr_19919_19938 = state_19908__$1;(statearr_19919_19938[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19909 === 8))
{var inst_19890 = (state_19908[9]);var state_19908__$1 = state_19908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19908__$1,11,out,inst_19890);
} else
{if((state_val_19909 === 9))
{var state_19908__$1 = state_19908;var statearr_19920_19939 = state_19908__$1;(statearr_19920_19939[2] = null);
(statearr_19920_19939[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19909 === 10))
{var inst_19900 = (state_19908[2]);var state_19908__$1 = state_19908;var statearr_19921_19940 = state_19908__$1;(statearr_19921_19940[2] = inst_19900);
(statearr_19921_19940[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19909 === 11))
{var inst_19885 = (state_19908[7]);var inst_19895 = (state_19908[2]);var inst_19896 = (inst_19885 + 1);var inst_19885__$1 = inst_19896;var state_19908__$1 = (function (){var statearr_19922 = state_19908;(statearr_19922[10] = inst_19895);
(statearr_19922[7] = inst_19885__$1);
return statearr_19922;
})();var statearr_19923_19941 = state_19908__$1;(statearr_19923_19941[2] = null);
(statearr_19923_19941[1] = 2);
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
var state_machine__8407__auto____0 = (function (){var statearr_19927 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19927[0] = state_machine__8407__auto__);
(statearr_19927[1] = 1);
return statearr_19927;
});
var state_machine__8407__auto____1 = (function (state_19908){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_19908);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e19928){if((e19928 instanceof Object))
{var ex__8410__auto__ = e19928;var statearr_19929_19942 = state_19908;(statearr_19929_19942[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19943 = state_19908;
state_19908 = G__19943;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_19908){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_19908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_19930 = f__8561__auto__.call(null);(statearr_19930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___19931);
return statearr_19930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8560__auto___20040 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_20015){var state_val_20016 = (state_20015[1]);if((state_val_20016 === 1))
{var inst_19992 = null;var state_20015__$1 = (function (){var statearr_20017 = state_20015;(statearr_20017[7] = inst_19992);
return statearr_20017;
})();var statearr_20018_20041 = state_20015__$1;(statearr_20018_20041[2] = null);
(statearr_20018_20041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20016 === 2))
{var state_20015__$1 = state_20015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20015__$1,4,ch);
} else
{if((state_val_20016 === 3))
{var inst_20012 = (state_20015[2]);var inst_20013 = cljs.core.async.close_BANG_.call(null,out);var state_20015__$1 = (function (){var statearr_20019 = state_20015;(statearr_20019[8] = inst_20012);
return statearr_20019;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20015__$1,inst_20013);
} else
{if((state_val_20016 === 4))
{var inst_19995 = (state_20015[9]);var inst_19995__$1 = (state_20015[2]);var inst_19996 = (inst_19995__$1 == null);var inst_19997 = cljs.core.not.call(null,inst_19996);var state_20015__$1 = (function (){var statearr_20020 = state_20015;(statearr_20020[9] = inst_19995__$1);
return statearr_20020;
})();if(inst_19997)
{var statearr_20021_20042 = state_20015__$1;(statearr_20021_20042[1] = 5);
} else
{var statearr_20022_20043 = state_20015__$1;(statearr_20022_20043[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20016 === 5))
{var inst_19995 = (state_20015[9]);var inst_19992 = (state_20015[7]);var inst_19999 = cljs.core._EQ_.call(null,inst_19995,inst_19992);var state_20015__$1 = state_20015;if(inst_19999)
{var statearr_20023_20044 = state_20015__$1;(statearr_20023_20044[1] = 8);
} else
{var statearr_20024_20045 = state_20015__$1;(statearr_20024_20045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20016 === 6))
{var state_20015__$1 = state_20015;var statearr_20026_20046 = state_20015__$1;(statearr_20026_20046[2] = null);
(statearr_20026_20046[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20016 === 7))
{var inst_20010 = (state_20015[2]);var state_20015__$1 = state_20015;var statearr_20027_20047 = state_20015__$1;(statearr_20027_20047[2] = inst_20010);
(statearr_20027_20047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20016 === 8))
{var inst_19992 = (state_20015[7]);var tmp20025 = inst_19992;var inst_19992__$1 = tmp20025;var state_20015__$1 = (function (){var statearr_20028 = state_20015;(statearr_20028[7] = inst_19992__$1);
return statearr_20028;
})();var statearr_20029_20048 = state_20015__$1;(statearr_20029_20048[2] = null);
(statearr_20029_20048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20016 === 9))
{var inst_19995 = (state_20015[9]);var state_20015__$1 = state_20015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20015__$1,11,out,inst_19995);
} else
{if((state_val_20016 === 10))
{var inst_20007 = (state_20015[2]);var state_20015__$1 = state_20015;var statearr_20030_20049 = state_20015__$1;(statearr_20030_20049[2] = inst_20007);
(statearr_20030_20049[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20016 === 11))
{var inst_19995 = (state_20015[9]);var inst_20004 = (state_20015[2]);var inst_19992 = inst_19995;var state_20015__$1 = (function (){var statearr_20031 = state_20015;(statearr_20031[10] = inst_20004);
(statearr_20031[7] = inst_19992);
return statearr_20031;
})();var statearr_20032_20050 = state_20015__$1;(statearr_20032_20050[2] = null);
(statearr_20032_20050[1] = 2);
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
var state_machine__8407__auto____0 = (function (){var statearr_20036 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20036[0] = state_machine__8407__auto__);
(statearr_20036[1] = 1);
return statearr_20036;
});
var state_machine__8407__auto____1 = (function (state_20015){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_20015);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e20037){if((e20037 instanceof Object))
{var ex__8410__auto__ = e20037;var statearr_20038_20051 = state_20015;(statearr_20038_20051[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20052 = state_20015;
state_20015 = G__20052;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_20015){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_20015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_20039 = f__8561__auto__.call(null);(statearr_20039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___20040);
return statearr_20039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8560__auto___20187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_20157){var state_val_20158 = (state_20157[1]);if((state_val_20158 === 1))
{var inst_20120 = (new Array(n));var inst_20121 = inst_20120;var inst_20122 = 0;var state_20157__$1 = (function (){var statearr_20159 = state_20157;(statearr_20159[7] = inst_20122);
(statearr_20159[8] = inst_20121);
return statearr_20159;
})();var statearr_20160_20188 = state_20157__$1;(statearr_20160_20188[2] = null);
(statearr_20160_20188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 2))
{var state_20157__$1 = state_20157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20157__$1,4,ch);
} else
{if((state_val_20158 === 3))
{var inst_20155 = (state_20157[2]);var state_20157__$1 = state_20157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20157__$1,inst_20155);
} else
{if((state_val_20158 === 4))
{var inst_20125 = (state_20157[9]);var inst_20125__$1 = (state_20157[2]);var inst_20126 = (inst_20125__$1 == null);var inst_20127 = cljs.core.not.call(null,inst_20126);var state_20157__$1 = (function (){var statearr_20161 = state_20157;(statearr_20161[9] = inst_20125__$1);
return statearr_20161;
})();if(inst_20127)
{var statearr_20162_20189 = state_20157__$1;(statearr_20162_20189[1] = 5);
} else
{var statearr_20163_20190 = state_20157__$1;(statearr_20163_20190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 5))
{var inst_20125 = (state_20157[9]);var inst_20130 = (state_20157[10]);var inst_20122 = (state_20157[7]);var inst_20121 = (state_20157[8]);var inst_20129 = (inst_20121[inst_20122] = inst_20125);var inst_20130__$1 = (inst_20122 + 1);var inst_20131 = (inst_20130__$1 < n);var state_20157__$1 = (function (){var statearr_20164 = state_20157;(statearr_20164[10] = inst_20130__$1);
(statearr_20164[11] = inst_20129);
return statearr_20164;
})();if(cljs.core.truth_(inst_20131))
{var statearr_20165_20191 = state_20157__$1;(statearr_20165_20191[1] = 8);
} else
{var statearr_20166_20192 = state_20157__$1;(statearr_20166_20192[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 6))
{var inst_20122 = (state_20157[7]);var inst_20143 = (inst_20122 > 0);var state_20157__$1 = state_20157;if(cljs.core.truth_(inst_20143))
{var statearr_20168_20193 = state_20157__$1;(statearr_20168_20193[1] = 12);
} else
{var statearr_20169_20194 = state_20157__$1;(statearr_20169_20194[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 7))
{var inst_20153 = (state_20157[2]);var state_20157__$1 = state_20157;var statearr_20170_20195 = state_20157__$1;(statearr_20170_20195[2] = inst_20153);
(statearr_20170_20195[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 8))
{var inst_20130 = (state_20157[10]);var inst_20121 = (state_20157[8]);var tmp20167 = inst_20121;var inst_20121__$1 = tmp20167;var inst_20122 = inst_20130;var state_20157__$1 = (function (){var statearr_20171 = state_20157;(statearr_20171[7] = inst_20122);
(statearr_20171[8] = inst_20121__$1);
return statearr_20171;
})();var statearr_20172_20196 = state_20157__$1;(statearr_20172_20196[2] = null);
(statearr_20172_20196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 9))
{var inst_20121 = (state_20157[8]);var inst_20135 = cljs.core.vec.call(null,inst_20121);var state_20157__$1 = state_20157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20157__$1,11,out,inst_20135);
} else
{if((state_val_20158 === 10))
{var inst_20141 = (state_20157[2]);var state_20157__$1 = state_20157;var statearr_20173_20197 = state_20157__$1;(statearr_20173_20197[2] = inst_20141);
(statearr_20173_20197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 11))
{var inst_20137 = (state_20157[2]);var inst_20138 = (new Array(n));var inst_20121 = inst_20138;var inst_20122 = 0;var state_20157__$1 = (function (){var statearr_20174 = state_20157;(statearr_20174[7] = inst_20122);
(statearr_20174[8] = inst_20121);
(statearr_20174[12] = inst_20137);
return statearr_20174;
})();var statearr_20175_20198 = state_20157__$1;(statearr_20175_20198[2] = null);
(statearr_20175_20198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 12))
{var inst_20121 = (state_20157[8]);var inst_20145 = cljs.core.vec.call(null,inst_20121);var state_20157__$1 = state_20157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20157__$1,15,out,inst_20145);
} else
{if((state_val_20158 === 13))
{var state_20157__$1 = state_20157;var statearr_20176_20199 = state_20157__$1;(statearr_20176_20199[2] = null);
(statearr_20176_20199[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 14))
{var inst_20150 = (state_20157[2]);var inst_20151 = cljs.core.async.close_BANG_.call(null,out);var state_20157__$1 = (function (){var statearr_20177 = state_20157;(statearr_20177[13] = inst_20150);
return statearr_20177;
})();var statearr_20178_20200 = state_20157__$1;(statearr_20178_20200[2] = inst_20151);
(statearr_20178_20200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 15))
{var inst_20147 = (state_20157[2]);var state_20157__$1 = state_20157;var statearr_20179_20201 = state_20157__$1;(statearr_20179_20201[2] = inst_20147);
(statearr_20179_20201[1] = 14);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_20183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20183[0] = state_machine__8407__auto__);
(statearr_20183[1] = 1);
return statearr_20183;
});
var state_machine__8407__auto____1 = (function (state_20157){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_20157);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e20184){if((e20184 instanceof Object))
{var ex__8410__auto__ = e20184;var statearr_20185_20202 = state_20157;(statearr_20185_20202[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20203 = state_20157;
state_20157 = G__20203;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_20157){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_20157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_20186 = f__8561__auto__.call(null);(statearr_20186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___20187);
return statearr_20186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8560__auto___20346 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8561__auto__ = (function (){var switch__8406__auto__ = (function (state_20316){var state_val_20317 = (state_20316[1]);if((state_val_20317 === 1))
{var inst_20275 = [];var inst_20276 = inst_20275;var inst_20277 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_20316__$1 = (function (){var statearr_20318 = state_20316;(statearr_20318[7] = inst_20277);
(statearr_20318[8] = inst_20276);
return statearr_20318;
})();var statearr_20319_20347 = state_20316__$1;(statearr_20319_20347[2] = null);
(statearr_20319_20347[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 2))
{var state_20316__$1 = state_20316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20316__$1,4,ch);
} else
{if((state_val_20317 === 3))
{var inst_20314 = (state_20316[2]);var state_20316__$1 = state_20316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20316__$1,inst_20314);
} else
{if((state_val_20317 === 4))
{var inst_20280 = (state_20316[9]);var inst_20280__$1 = (state_20316[2]);var inst_20281 = (inst_20280__$1 == null);var inst_20282 = cljs.core.not.call(null,inst_20281);var state_20316__$1 = (function (){var statearr_20320 = state_20316;(statearr_20320[9] = inst_20280__$1);
return statearr_20320;
})();if(inst_20282)
{var statearr_20321_20348 = state_20316__$1;(statearr_20321_20348[1] = 5);
} else
{var statearr_20322_20349 = state_20316__$1;(statearr_20322_20349[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 5))
{var inst_20284 = (state_20316[10]);var inst_20280 = (state_20316[9]);var inst_20277 = (state_20316[7]);var inst_20284__$1 = f.call(null,inst_20280);var inst_20285 = cljs.core._EQ_.call(null,inst_20284__$1,inst_20277);var inst_20286 = cljs.core.keyword_identical_QMARK_.call(null,inst_20277,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_20287 = (inst_20285) || (inst_20286);var state_20316__$1 = (function (){var statearr_20323 = state_20316;(statearr_20323[10] = inst_20284__$1);
return statearr_20323;
})();if(cljs.core.truth_(inst_20287))
{var statearr_20324_20350 = state_20316__$1;(statearr_20324_20350[1] = 8);
} else
{var statearr_20325_20351 = state_20316__$1;(statearr_20325_20351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 6))
{var inst_20276 = (state_20316[8]);var inst_20301 = inst_20276.length;var inst_20302 = (inst_20301 > 0);var state_20316__$1 = state_20316;if(cljs.core.truth_(inst_20302))
{var statearr_20327_20352 = state_20316__$1;(statearr_20327_20352[1] = 12);
} else
{var statearr_20328_20353 = state_20316__$1;(statearr_20328_20353[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 7))
{var inst_20312 = (state_20316[2]);var state_20316__$1 = state_20316;var statearr_20329_20354 = state_20316__$1;(statearr_20329_20354[2] = inst_20312);
(statearr_20329_20354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 8))
{var inst_20284 = (state_20316[10]);var inst_20280 = (state_20316[9]);var inst_20276 = (state_20316[8]);var inst_20289 = inst_20276.push(inst_20280);var tmp20326 = inst_20276;var inst_20276__$1 = tmp20326;var inst_20277 = inst_20284;var state_20316__$1 = (function (){var statearr_20330 = state_20316;(statearr_20330[11] = inst_20289);
(statearr_20330[7] = inst_20277);
(statearr_20330[8] = inst_20276__$1);
return statearr_20330;
})();var statearr_20331_20355 = state_20316__$1;(statearr_20331_20355[2] = null);
(statearr_20331_20355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 9))
{var inst_20276 = (state_20316[8]);var inst_20292 = cljs.core.vec.call(null,inst_20276);var state_20316__$1 = state_20316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20316__$1,11,out,inst_20292);
} else
{if((state_val_20317 === 10))
{var inst_20299 = (state_20316[2]);var state_20316__$1 = state_20316;var statearr_20332_20356 = state_20316__$1;(statearr_20332_20356[2] = inst_20299);
(statearr_20332_20356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 11))
{var inst_20284 = (state_20316[10]);var inst_20280 = (state_20316[9]);var inst_20294 = (state_20316[2]);var inst_20295 = [];var inst_20296 = inst_20295.push(inst_20280);var inst_20276 = inst_20295;var inst_20277 = inst_20284;var state_20316__$1 = (function (){var statearr_20333 = state_20316;(statearr_20333[12] = inst_20296);
(statearr_20333[13] = inst_20294);
(statearr_20333[7] = inst_20277);
(statearr_20333[8] = inst_20276);
return statearr_20333;
})();var statearr_20334_20357 = state_20316__$1;(statearr_20334_20357[2] = null);
(statearr_20334_20357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 12))
{var inst_20276 = (state_20316[8]);var inst_20304 = cljs.core.vec.call(null,inst_20276);var state_20316__$1 = state_20316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20316__$1,15,out,inst_20304);
} else
{if((state_val_20317 === 13))
{var state_20316__$1 = state_20316;var statearr_20335_20358 = state_20316__$1;(statearr_20335_20358[2] = null);
(statearr_20335_20358[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 14))
{var inst_20309 = (state_20316[2]);var inst_20310 = cljs.core.async.close_BANG_.call(null,out);var state_20316__$1 = (function (){var statearr_20336 = state_20316;(statearr_20336[14] = inst_20309);
return statearr_20336;
})();var statearr_20337_20359 = state_20316__$1;(statearr_20337_20359[2] = inst_20310);
(statearr_20337_20359[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20317 === 15))
{var inst_20306 = (state_20316[2]);var state_20316__$1 = state_20316;var statearr_20338_20360 = state_20316__$1;(statearr_20338_20360[2] = inst_20306);
(statearr_20338_20360[1] = 14);
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
});return ((function (switch__8406__auto__){
return (function() {
var state_machine__8407__auto__ = null;
var state_machine__8407__auto____0 = (function (){var statearr_20342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20342[0] = state_machine__8407__auto__);
(statearr_20342[1] = 1);
return statearr_20342;
});
var state_machine__8407__auto____1 = (function (state_20316){while(true){
var ret_value__8408__auto__ = (function (){try{while(true){
var result__8409__auto__ = switch__8406__auto__.call(null,state_20316);if(cljs.core.keyword_identical_QMARK_.call(null,result__8409__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8409__auto__;
}
break;
}
}catch (e20343){if((e20343 instanceof Object))
{var ex__8410__auto__ = e20343;var statearr_20344_20361 = state_20316;(statearr_20344_20361[5] = ex__8410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8408__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20362 = state_20316;
state_20316 = G__20362;
continue;
}
} else
{return ret_value__8408__auto__;
}
break;
}
});
state_machine__8407__auto__ = function(state_20316){
switch(arguments.length){
case 0:
return state_machine__8407__auto____0.call(this);
case 1:
return state_machine__8407__auto____1.call(this,state_20316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8407__auto____0;
state_machine__8407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8407__auto____1;
return state_machine__8407__auto__;
})()
;})(switch__8406__auto__))
})();var state__8562__auto__ = (function (){var statearr_20345 = f__8561__auto__.call(null);(statearr_20345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8560__auto___20346);
return statearr_20345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8562__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
