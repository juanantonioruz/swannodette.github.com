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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13815 = (function (f,fn_handler,meta13816){
this.f = f;
this.fn_handler = fn_handler;
this.meta13816 = meta13816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13815.cljs$lang$type = true;
cljs.core.async.t13815.cljs$lang$ctorStr = "cljs.core.async/t13815";
cljs.core.async.t13815.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t13815");
});
cljs.core.async.t13815.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13817){var self__ = this;
var _13817__$1 = this;return self__.meta13816;
});
cljs.core.async.t13815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13817,meta13816__$1){var self__ = this;
var _13817__$1 = this;return (new cljs.core.async.t13815(self__.f,self__.fn_handler,meta13816__$1));
});
cljs.core.async.__GT_t13815 = (function __GT_t13815(f__$1,fn_handler__$1,meta13816){return (new cljs.core.async.t13815(f__$1,fn_handler__$1,meta13816));
});
}
return (new cljs.core.async.t13815(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13819 = buff;if(G__13819)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__13819.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13819.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13819);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13819);
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
{var val_13820 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13820);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13820);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3419__auto__ = ret;if(cljs.core.truth_(and__3419__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3419__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4273__auto___13821 = n;var x_13822 = 0;while(true){
if((x_13822 < n__4273__auto___13821))
{(a[x_13822] = 0);
{
var G__13823 = (x_13822 + 1);
x_13822 = G__13823;
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
var G__13824 = (i + 1);
i = G__13824;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13828 = (function (flag,alt_flag,meta13829){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13829 = meta13829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13828.cljs$lang$type = true;
cljs.core.async.t13828.cljs$lang$ctorStr = "cljs.core.async/t13828";
cljs.core.async.t13828.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t13828");
});
cljs.core.async.t13828.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13830){var self__ = this;
var _13830__$1 = this;return self__.meta13829;
});
cljs.core.async.t13828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13830,meta13829__$1){var self__ = this;
var _13830__$1 = this;return (new cljs.core.async.t13828(self__.flag,self__.alt_flag,meta13829__$1));
});
cljs.core.async.__GT_t13828 = (function __GT_t13828(flag__$1,alt_flag__$1,meta13829){return (new cljs.core.async.t13828(flag__$1,alt_flag__$1,meta13829));
});
}
return (new cljs.core.async.t13828(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13834 = (function (cb,flag,alt_handler,meta13835){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13835 = meta13835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13834.cljs$lang$type = true;
cljs.core.async.t13834.cljs$lang$ctorStr = "cljs.core.async/t13834";
cljs.core.async.t13834.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t13834");
});
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13836){var self__ = this;
var _13836__$1 = this;return self__.meta13835;
});
cljs.core.async.t13834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13836,meta13835__$1){var self__ = this;
var _13836__$1 = this;return (new cljs.core.async.t13834(self__.cb,self__.flag,self__.alt_handler,meta13835__$1));
});
cljs.core.async.__GT_t13834 = (function __GT_t13834(cb__$1,flag__$1,alt_handler__$1,meta13835){return (new cljs.core.async.t13834(cb__$1,flag__$1,alt_handler__$1,meta13835));
});
}
return (new cljs.core.async.t13834(cb,flag,alt_handler,null));
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
return (function (p1__13837_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3431__auto__ = wport;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13838 = (i + 1);
i = G__13838;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3431__auto__ = ret;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3419__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3419__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3419__auto__;
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
var alts_BANG___delegate = function (ports,p__13839){var map__13841 = p__13839;var map__13841__$1 = ((cljs.core.seq_QMARK_.call(null,map__13841))?cljs.core.apply.call(null,cljs.core.hash_map,map__13841):map__13841);var opts = map__13841__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13839 = null;if (arguments.length > 1) {
  p__13839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13839);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13842){
var ports = cljs.core.first(arglist__13842);
var p__13839 = cljs.core.rest(arglist__13842);
return alts_BANG___delegate(ports,p__13839);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13850 = (function (ch,f,map_LT_,meta13851){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13851 = meta13851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13850.cljs$lang$type = true;
cljs.core.async.t13850.cljs$lang$ctorStr = "cljs.core.async/t13850";
cljs.core.async.t13850.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t13850");
});
cljs.core.async.t13850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13853 = (function (fn1,_,meta13851,ch,f,map_LT_,meta13854){
this.fn1 = fn1;
this._ = _;
this.meta13851 = meta13851;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13854 = meta13854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13853.cljs$lang$type = true;
cljs.core.async.t13853.cljs$lang$ctorStr = "cljs.core.async/t13853";
cljs.core.async.t13853.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t13853");
});
cljs.core.async.t13853.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13853.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13843_SHARP_){return f1.call(null,(((p1__13843_SHARP_ == null))?null:self__.f.call(null,p1__13843_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13855){var self__ = this;
var _13855__$1 = this;return self__.meta13854;
});
cljs.core.async.t13853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13855,meta13854__$1){var self__ = this;
var _13855__$1 = this;return (new cljs.core.async.t13853(self__.fn1,self__._,self__.meta13851,self__.ch,self__.f,self__.map_LT_,meta13854__$1));
});
cljs.core.async.__GT_t13853 = (function __GT_t13853(fn1__$1,___$2,meta13851__$1,ch__$2,f__$2,map_LT___$2,meta13854){return (new cljs.core.async.t13853(fn1__$1,___$2,meta13851__$1,ch__$2,f__$2,map_LT___$2,meta13854));
});
}
return (new cljs.core.async.t13853(fn1,___$1,self__.meta13851,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3419__auto__ = ret;if(cljs.core.truth_(and__3419__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3419__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13850.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13852){var self__ = this;
var _13852__$1 = this;return self__.meta13851;
});
cljs.core.async.t13850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13852,meta13851__$1){var self__ = this;
var _13852__$1 = this;return (new cljs.core.async.t13850(self__.ch,self__.f,self__.map_LT_,meta13851__$1));
});
cljs.core.async.__GT_t13850 = (function __GT_t13850(ch__$1,f__$1,map_LT___$1,meta13851){return (new cljs.core.async.t13850(ch__$1,f__$1,map_LT___$1,meta13851));
});
}
return (new cljs.core.async.t13850(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13859 = (function (ch,f,map_GT_,meta13860){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13860 = meta13860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13859.cljs$lang$type = true;
cljs.core.async.t13859.cljs$lang$ctorStr = "cljs.core.async/t13859";
cljs.core.async.t13859.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t13859");
});
cljs.core.async.t13859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13859.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13859.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13861){var self__ = this;
var _13861__$1 = this;return self__.meta13860;
});
cljs.core.async.t13859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13861,meta13860__$1){var self__ = this;
var _13861__$1 = this;return (new cljs.core.async.t13859(self__.ch,self__.f,self__.map_GT_,meta13860__$1));
});
cljs.core.async.__GT_t13859 = (function __GT_t13859(ch__$1,f__$1,map_GT___$1,meta13860){return (new cljs.core.async.t13859(ch__$1,f__$1,map_GT___$1,meta13860));
});
}
return (new cljs.core.async.t13859(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13865 = (function (ch,p,filter_GT_,meta13866){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13866 = meta13866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13865.cljs$lang$type = true;
cljs.core.async.t13865.cljs$lang$ctorStr = "cljs.core.async/t13865";
cljs.core.async.t13865.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t13865");
});
cljs.core.async.t13865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13865.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13867){var self__ = this;
var _13867__$1 = this;return self__.meta13866;
});
cljs.core.async.t13865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13867,meta13866__$1){var self__ = this;
var _13867__$1 = this;return (new cljs.core.async.t13865(self__.ch,self__.p,self__.filter_GT_,meta13866__$1));
});
cljs.core.async.__GT_t13865 = (function __GT_t13865(ch__$1,p__$1,filter_GT___$1,meta13866){return (new cljs.core.async.t13865(ch__$1,p__$1,filter_GT___$1,meta13866));
});
}
return (new cljs.core.async.t13865(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5546__auto___13950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_13929){var state_val_13930 = (state_13929[1]);if((state_val_13930 === 1))
{var state_13929__$1 = state_13929;var statearr_13931_13951 = state_13929__$1;(statearr_13931_13951[2] = null);
(statearr_13931_13951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13930 === 2))
{var state_13929__$1 = state_13929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13929__$1,4,ch);
} else
{if((state_val_13930 === 3))
{var inst_13927 = (state_13929[2]);var state_13929__$1 = state_13929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13929__$1,inst_13927);
} else
{if((state_val_13930 === 4))
{var inst_13911 = (state_13929[7]);var inst_13911__$1 = (state_13929[2]);var inst_13912 = (inst_13911__$1 == null);var state_13929__$1 = (function (){var statearr_13932 = state_13929;(statearr_13932[7] = inst_13911__$1);
return statearr_13932;
})();if(cljs.core.truth_(inst_13912))
{var statearr_13933_13952 = state_13929__$1;(statearr_13933_13952[1] = 5);
} else
{var statearr_13934_13953 = state_13929__$1;(statearr_13934_13953[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13930 === 5))
{var inst_13914 = cljs.core.async.close_BANG_.call(null,out);var state_13929__$1 = state_13929;var statearr_13935_13954 = state_13929__$1;(statearr_13935_13954[2] = inst_13914);
(statearr_13935_13954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13930 === 6))
{var inst_13911 = (state_13929[7]);var inst_13916 = p.call(null,inst_13911);var state_13929__$1 = state_13929;if(cljs.core.truth_(inst_13916))
{var statearr_13936_13955 = state_13929__$1;(statearr_13936_13955[1] = 8);
} else
{var statearr_13937_13956 = state_13929__$1;(statearr_13937_13956[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13930 === 7))
{var inst_13925 = (state_13929[2]);var state_13929__$1 = state_13929;var statearr_13938_13957 = state_13929__$1;(statearr_13938_13957[2] = inst_13925);
(statearr_13938_13957[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13930 === 8))
{var inst_13911 = (state_13929[7]);var state_13929__$1 = state_13929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13929__$1,11,out,inst_13911);
} else
{if((state_val_13930 === 9))
{var state_13929__$1 = state_13929;var statearr_13939_13958 = state_13929__$1;(statearr_13939_13958[2] = null);
(statearr_13939_13958[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13930 === 10))
{var inst_13922 = (state_13929[2]);var state_13929__$1 = (function (){var statearr_13940 = state_13929;(statearr_13940[8] = inst_13922);
return statearr_13940;
})();var statearr_13941_13959 = state_13929__$1;(statearr_13941_13959[2] = null);
(statearr_13941_13959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13930 === 11))
{var inst_13919 = (state_13929[2]);var state_13929__$1 = state_13929;var statearr_13942_13960 = state_13929__$1;(statearr_13942_13960[2] = inst_13919);
(statearr_13942_13960[1] = 10);
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
var state_machine__5532__auto____0 = (function (){var statearr_13946 = [null,null,null,null,null,null,null,null,null];(statearr_13946[0] = state_machine__5532__auto__);
(statearr_13946[1] = 1);
return statearr_13946;
});
var state_machine__5532__auto____1 = (function (state_13929){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_13929);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e13947){if((e13947 instanceof Object))
{var ex__5535__auto__ = e13947;var statearr_13948_13961 = state_13929;(statearr_13948_13961[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13929);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13962 = state_13929;
state_13929 = G__13962;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_13929){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_13929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_13949 = f__5547__auto__.call(null);(statearr_13949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___13950);
return statearr_13949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_14114){var state_val_14115 = (state_14114[1]);if((state_val_14115 === 1))
{var state_14114__$1 = state_14114;var statearr_14116_14153 = state_14114__$1;(statearr_14116_14153[2] = null);
(statearr_14116_14153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 2))
{var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14114__$1,4,in$);
} else
{if((state_val_14115 === 3))
{var inst_14112 = (state_14114[2]);var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14114__$1,inst_14112);
} else
{if((state_val_14115 === 4))
{var inst_14060 = (state_14114[7]);var inst_14060__$1 = (state_14114[2]);var inst_14061 = (inst_14060__$1 == null);var state_14114__$1 = (function (){var statearr_14117 = state_14114;(statearr_14117[7] = inst_14060__$1);
return statearr_14117;
})();if(cljs.core.truth_(inst_14061))
{var statearr_14118_14154 = state_14114__$1;(statearr_14118_14154[1] = 5);
} else
{var statearr_14119_14155 = state_14114__$1;(statearr_14119_14155[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 5))
{var inst_14063 = cljs.core.async.close_BANG_.call(null,out);var state_14114__$1 = state_14114;var statearr_14120_14156 = state_14114__$1;(statearr_14120_14156[2] = inst_14063);
(statearr_14120_14156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 6))
{var inst_14060 = (state_14114[7]);var inst_14065 = f.call(null,inst_14060);var inst_14070 = cljs.core.seq.call(null,inst_14065);var inst_14071 = inst_14070;var inst_14072 = null;var inst_14073 = 0;var inst_14074 = 0;var state_14114__$1 = (function (){var statearr_14121 = state_14114;(statearr_14121[8] = inst_14071);
(statearr_14121[9] = inst_14072);
(statearr_14121[10] = inst_14074);
(statearr_14121[11] = inst_14073);
return statearr_14121;
})();var statearr_14122_14157 = state_14114__$1;(statearr_14122_14157[2] = null);
(statearr_14122_14157[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 7))
{var inst_14110 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14123_14158 = state_14114__$1;(statearr_14123_14158[2] = inst_14110);
(statearr_14123_14158[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 8))
{var inst_14074 = (state_14114[10]);var inst_14073 = (state_14114[11]);var inst_14076 = (inst_14074 < inst_14073);var inst_14077 = inst_14076;var state_14114__$1 = state_14114;if(cljs.core.truth_(inst_14077))
{var statearr_14124_14159 = state_14114__$1;(statearr_14124_14159[1] = 10);
} else
{var statearr_14125_14160 = state_14114__$1;(statearr_14125_14160[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 9))
{var inst_14107 = (state_14114[2]);var state_14114__$1 = (function (){var statearr_14126 = state_14114;(statearr_14126[12] = inst_14107);
return statearr_14126;
})();var statearr_14127_14161 = state_14114__$1;(statearr_14127_14161[2] = null);
(statearr_14127_14161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 10))
{var inst_14072 = (state_14114[9]);var inst_14074 = (state_14114[10]);var inst_14079 = cljs.core._nth.call(null,inst_14072,inst_14074);var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14114__$1,13,out,inst_14079);
} else
{if((state_val_14115 === 11))
{var inst_14071 = (state_14114[8]);var inst_14085 = (state_14114[13]);var inst_14085__$1 = cljs.core.seq.call(null,inst_14071);var state_14114__$1 = (function (){var statearr_14131 = state_14114;(statearr_14131[13] = inst_14085__$1);
return statearr_14131;
})();if(inst_14085__$1)
{var statearr_14132_14162 = state_14114__$1;(statearr_14132_14162[1] = 14);
} else
{var statearr_14133_14163 = state_14114__$1;(statearr_14133_14163[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 12))
{var inst_14105 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14134_14164 = state_14114__$1;(statearr_14134_14164[2] = inst_14105);
(statearr_14134_14164[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 13))
{var inst_14071 = (state_14114[8]);var inst_14072 = (state_14114[9]);var inst_14074 = (state_14114[10]);var inst_14073 = (state_14114[11]);var inst_14081 = (state_14114[2]);var inst_14082 = (inst_14074 + 1);var tmp14128 = inst_14071;var tmp14129 = inst_14072;var tmp14130 = inst_14073;var inst_14071__$1 = tmp14128;var inst_14072__$1 = tmp14129;var inst_14073__$1 = tmp14130;var inst_14074__$1 = inst_14082;var state_14114__$1 = (function (){var statearr_14135 = state_14114;(statearr_14135[8] = inst_14071__$1);
(statearr_14135[9] = inst_14072__$1);
(statearr_14135[14] = inst_14081);
(statearr_14135[10] = inst_14074__$1);
(statearr_14135[11] = inst_14073__$1);
return statearr_14135;
})();var statearr_14136_14165 = state_14114__$1;(statearr_14136_14165[2] = null);
(statearr_14136_14165[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 14))
{var inst_14085 = (state_14114[13]);var inst_14087 = cljs.core.chunked_seq_QMARK_.call(null,inst_14085);var state_14114__$1 = state_14114;if(inst_14087)
{var statearr_14137_14166 = state_14114__$1;(statearr_14137_14166[1] = 17);
} else
{var statearr_14138_14167 = state_14114__$1;(statearr_14138_14167[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 15))
{var state_14114__$1 = state_14114;var statearr_14139_14168 = state_14114__$1;(statearr_14139_14168[2] = null);
(statearr_14139_14168[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 16))
{var inst_14103 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14140_14169 = state_14114__$1;(statearr_14140_14169[2] = inst_14103);
(statearr_14140_14169[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 17))
{var inst_14085 = (state_14114[13]);var inst_14089 = cljs.core.chunk_first.call(null,inst_14085);var inst_14090 = cljs.core.chunk_rest.call(null,inst_14085);var inst_14091 = cljs.core.count.call(null,inst_14089);var inst_14071 = inst_14090;var inst_14072 = inst_14089;var inst_14073 = inst_14091;var inst_14074 = 0;var state_14114__$1 = (function (){var statearr_14141 = state_14114;(statearr_14141[8] = inst_14071);
(statearr_14141[9] = inst_14072);
(statearr_14141[10] = inst_14074);
(statearr_14141[11] = inst_14073);
return statearr_14141;
})();var statearr_14142_14170 = state_14114__$1;(statearr_14142_14170[2] = null);
(statearr_14142_14170[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 18))
{var inst_14085 = (state_14114[13]);var inst_14094 = cljs.core.first.call(null,inst_14085);var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14114__$1,20,out,inst_14094);
} else
{if((state_val_14115 === 19))
{var inst_14100 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14143_14171 = state_14114__$1;(statearr_14143_14171[2] = inst_14100);
(statearr_14143_14171[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 20))
{var inst_14085 = (state_14114[13]);var inst_14096 = (state_14114[2]);var inst_14097 = cljs.core.next.call(null,inst_14085);var inst_14071 = inst_14097;var inst_14072 = null;var inst_14073 = 0;var inst_14074 = 0;var state_14114__$1 = (function (){var statearr_14144 = state_14114;(statearr_14144[8] = inst_14071);
(statearr_14144[9] = inst_14072);
(statearr_14144[15] = inst_14096);
(statearr_14144[10] = inst_14074);
(statearr_14144[11] = inst_14073);
return statearr_14144;
})();var statearr_14145_14172 = state_14114__$1;(statearr_14145_14172[2] = null);
(statearr_14145_14172[1] = 8);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_14149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14149[0] = state_machine__5532__auto__);
(statearr_14149[1] = 1);
return statearr_14149;
});
var state_machine__5532__auto____1 = (function (state_14114){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_14114);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e14150){if((e14150 instanceof Object))
{var ex__5535__auto__ = e14150;var statearr_14151_14173 = state_14114;(statearr_14151_14173[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14114);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14174 = state_14114;
state_14114 = G__14174;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_14114){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_14114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_14152 = f__5547__auto__.call(null);(statearr_14152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_14152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return c__5546__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5546__auto___14255 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_14234){var state_val_14235 = (state_14234[1]);if((state_val_14235 === 1))
{var state_14234__$1 = state_14234;var statearr_14236_14256 = state_14234__$1;(statearr_14236_14256[2] = null);
(statearr_14236_14256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14235 === 2))
{var state_14234__$1 = state_14234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,4,from);
} else
{if((state_val_14235 === 3))
{var inst_14232 = (state_14234[2]);var state_14234__$1 = state_14234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14234__$1,inst_14232);
} else
{if((state_val_14235 === 4))
{var inst_14217 = (state_14234[7]);var inst_14217__$1 = (state_14234[2]);var inst_14218 = (inst_14217__$1 == null);var state_14234__$1 = (function (){var statearr_14237 = state_14234;(statearr_14237[7] = inst_14217__$1);
return statearr_14237;
})();if(cljs.core.truth_(inst_14218))
{var statearr_14238_14257 = state_14234__$1;(statearr_14238_14257[1] = 5);
} else
{var statearr_14239_14258 = state_14234__$1;(statearr_14239_14258[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14235 === 5))
{var state_14234__$1 = state_14234;if(cljs.core.truth_(close_QMARK_))
{var statearr_14240_14259 = state_14234__$1;(statearr_14240_14259[1] = 8);
} else
{var statearr_14241_14260 = state_14234__$1;(statearr_14241_14260[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14235 === 6))
{var inst_14217 = (state_14234[7]);var state_14234__$1 = state_14234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14234__$1,11,to,inst_14217);
} else
{if((state_val_14235 === 7))
{var inst_14230 = (state_14234[2]);var state_14234__$1 = state_14234;var statearr_14242_14261 = state_14234__$1;(statearr_14242_14261[2] = inst_14230);
(statearr_14242_14261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14235 === 8))
{var inst_14221 = cljs.core.async.close_BANG_.call(null,to);var state_14234__$1 = state_14234;var statearr_14243_14262 = state_14234__$1;(statearr_14243_14262[2] = inst_14221);
(statearr_14243_14262[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14235 === 9))
{var state_14234__$1 = state_14234;var statearr_14244_14263 = state_14234__$1;(statearr_14244_14263[2] = null);
(statearr_14244_14263[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14235 === 10))
{var inst_14224 = (state_14234[2]);var state_14234__$1 = state_14234;var statearr_14245_14264 = state_14234__$1;(statearr_14245_14264[2] = inst_14224);
(statearr_14245_14264[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14235 === 11))
{var inst_14227 = (state_14234[2]);var state_14234__$1 = (function (){var statearr_14246 = state_14234;(statearr_14246[8] = inst_14227);
return statearr_14246;
})();var statearr_14247_14265 = state_14234__$1;(statearr_14247_14265[2] = null);
(statearr_14247_14265[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_14251 = [null,null,null,null,null,null,null,null,null];(statearr_14251[0] = state_machine__5532__auto__);
(statearr_14251[1] = 1);
return statearr_14251;
});
var state_machine__5532__auto____1 = (function (state_14234){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_14234);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e14252){if((e14252 instanceof Object))
{var ex__5535__auto__ = e14252;var statearr_14253_14266 = state_14234;(statearr_14253_14266[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14234);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14267 = state_14234;
state_14234 = G__14267;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_14234){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_14234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_14254 = f__5547__auto__.call(null);(statearr_14254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___14255);
return statearr_14254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5546__auto___14354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_14332){var state_val_14333 = (state_14332[1]);if((state_val_14333 === 1))
{var state_14332__$1 = state_14332;var statearr_14334_14355 = state_14332__$1;(statearr_14334_14355[2] = null);
(statearr_14334_14355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 2))
{var state_14332__$1 = state_14332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14332__$1,4,ch);
} else
{if((state_val_14333 === 3))
{var inst_14330 = (state_14332[2]);var state_14332__$1 = state_14332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14332__$1,inst_14330);
} else
{if((state_val_14333 === 4))
{var inst_14313 = (state_14332[7]);var inst_14313__$1 = (state_14332[2]);var inst_14314 = (inst_14313__$1 == null);var state_14332__$1 = (function (){var statearr_14335 = state_14332;(statearr_14335[7] = inst_14313__$1);
return statearr_14335;
})();if(cljs.core.truth_(inst_14314))
{var statearr_14336_14356 = state_14332__$1;(statearr_14336_14356[1] = 5);
} else
{var statearr_14337_14357 = state_14332__$1;(statearr_14337_14357[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 5))
{var inst_14316 = cljs.core.async.close_BANG_.call(null,tc);var inst_14317 = cljs.core.async.close_BANG_.call(null,fc);var state_14332__$1 = (function (){var statearr_14338 = state_14332;(statearr_14338[8] = inst_14316);
return statearr_14338;
})();var statearr_14339_14358 = state_14332__$1;(statearr_14339_14358[2] = inst_14317);
(statearr_14339_14358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 6))
{var inst_14313 = (state_14332[7]);var inst_14319 = p.call(null,inst_14313);var state_14332__$1 = state_14332;if(cljs.core.truth_(inst_14319))
{var statearr_14340_14359 = state_14332__$1;(statearr_14340_14359[1] = 9);
} else
{var statearr_14341_14360 = state_14332__$1;(statearr_14341_14360[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 7))
{var inst_14328 = (state_14332[2]);var state_14332__$1 = state_14332;var statearr_14342_14361 = state_14332__$1;(statearr_14342_14361[2] = inst_14328);
(statearr_14342_14361[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 8))
{var inst_14325 = (state_14332[2]);var state_14332__$1 = (function (){var statearr_14343 = state_14332;(statearr_14343[9] = inst_14325);
return statearr_14343;
})();var statearr_14344_14362 = state_14332__$1;(statearr_14344_14362[2] = null);
(statearr_14344_14362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 9))
{var state_14332__$1 = state_14332;var statearr_14345_14363 = state_14332__$1;(statearr_14345_14363[2] = tc);
(statearr_14345_14363[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 10))
{var state_14332__$1 = state_14332;var statearr_14346_14364 = state_14332__$1;(statearr_14346_14364[2] = fc);
(statearr_14346_14364[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14333 === 11))
{var inst_14313 = (state_14332[7]);var inst_14323 = (state_14332[2]);var state_14332__$1 = state_14332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14332__$1,8,inst_14323,inst_14313);
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
var state_machine__5532__auto____0 = (function (){var statearr_14350 = [null,null,null,null,null,null,null,null,null,null];(statearr_14350[0] = state_machine__5532__auto__);
(statearr_14350[1] = 1);
return statearr_14350;
});
var state_machine__5532__auto____1 = (function (state_14332){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_14332);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e14351){if((e14351 instanceof Object))
{var ex__5535__auto__ = e14351;var statearr_14352_14365 = state_14332;(statearr_14352_14365[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14366 = state_14332;
state_14332 = G__14366;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_14332){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_14332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_14353 = f__5547__auto__.call(null);(statearr_14353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___14354);
return statearr_14353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_14413){var state_val_14414 = (state_14413[1]);if((state_val_14414 === 7))
{var inst_14409 = (state_14413[2]);var state_14413__$1 = state_14413;var statearr_14415_14431 = state_14413__$1;(statearr_14415_14431[2] = inst_14409);
(statearr_14415_14431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14414 === 6))
{var inst_14402 = (state_14413[7]);var inst_14399 = (state_14413[8]);var inst_14406 = f.call(null,inst_14399,inst_14402);var inst_14399__$1 = inst_14406;var state_14413__$1 = (function (){var statearr_14416 = state_14413;(statearr_14416[8] = inst_14399__$1);
return statearr_14416;
})();var statearr_14417_14432 = state_14413__$1;(statearr_14417_14432[2] = null);
(statearr_14417_14432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14414 === 5))
{var inst_14399 = (state_14413[8]);var state_14413__$1 = state_14413;var statearr_14418_14433 = state_14413__$1;(statearr_14418_14433[2] = inst_14399);
(statearr_14418_14433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14414 === 4))
{var inst_14402 = (state_14413[7]);var inst_14402__$1 = (state_14413[2]);var inst_14403 = (inst_14402__$1 == null);var state_14413__$1 = (function (){var statearr_14419 = state_14413;(statearr_14419[7] = inst_14402__$1);
return statearr_14419;
})();if(cljs.core.truth_(inst_14403))
{var statearr_14420_14434 = state_14413__$1;(statearr_14420_14434[1] = 5);
} else
{var statearr_14421_14435 = state_14413__$1;(statearr_14421_14435[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14414 === 3))
{var inst_14411 = (state_14413[2]);var state_14413__$1 = state_14413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14413__$1,inst_14411);
} else
{if((state_val_14414 === 2))
{var state_14413__$1 = state_14413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14413__$1,4,ch);
} else
{if((state_val_14414 === 1))
{var inst_14399 = init;var state_14413__$1 = (function (){var statearr_14422 = state_14413;(statearr_14422[8] = inst_14399);
return statearr_14422;
})();var statearr_14423_14436 = state_14413__$1;(statearr_14423_14436[2] = null);
(statearr_14423_14436[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_14427 = [null,null,null,null,null,null,null,null,null];(statearr_14427[0] = state_machine__5532__auto__);
(statearr_14427[1] = 1);
return statearr_14427;
});
var state_machine__5532__auto____1 = (function (state_14413){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_14413);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e14428){if((e14428 instanceof Object))
{var ex__5535__auto__ = e14428;var statearr_14429_14437 = state_14413;(statearr_14429_14437[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14438 = state_14413;
state_14413 = G__14438;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_14413){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_14413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_14430 = f__5547__auto__.call(null);(statearr_14430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_14430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return c__5546__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5546__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_14500){var state_val_14501 = (state_14500[1]);if((state_val_14501 === 1))
{var inst_14480 = cljs.core.seq.call(null,coll);var inst_14481 = inst_14480;var state_14500__$1 = (function (){var statearr_14502 = state_14500;(statearr_14502[7] = inst_14481);
return statearr_14502;
})();var statearr_14503_14521 = state_14500__$1;(statearr_14503_14521[2] = null);
(statearr_14503_14521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 2))
{var inst_14481 = (state_14500[7]);var state_14500__$1 = state_14500;if(cljs.core.truth_(inst_14481))
{var statearr_14504_14522 = state_14500__$1;(statearr_14504_14522[1] = 4);
} else
{var statearr_14505_14523 = state_14500__$1;(statearr_14505_14523[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 3))
{var inst_14498 = (state_14500[2]);var state_14500__$1 = state_14500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14500__$1,inst_14498);
} else
{if((state_val_14501 === 4))
{var inst_14481 = (state_14500[7]);var inst_14484 = cljs.core.first.call(null,inst_14481);var state_14500__$1 = state_14500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14500__$1,7,ch,inst_14484);
} else
{if((state_val_14501 === 5))
{var state_14500__$1 = state_14500;if(cljs.core.truth_(close_QMARK_))
{var statearr_14506_14524 = state_14500__$1;(statearr_14506_14524[1] = 8);
} else
{var statearr_14507_14525 = state_14500__$1;(statearr_14507_14525[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 6))
{var inst_14496 = (state_14500[2]);var state_14500__$1 = state_14500;var statearr_14508_14526 = state_14500__$1;(statearr_14508_14526[2] = inst_14496);
(statearr_14508_14526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 7))
{var inst_14481 = (state_14500[7]);var inst_14486 = (state_14500[2]);var inst_14487 = cljs.core.next.call(null,inst_14481);var inst_14481__$1 = inst_14487;var state_14500__$1 = (function (){var statearr_14509 = state_14500;(statearr_14509[8] = inst_14486);
(statearr_14509[7] = inst_14481__$1);
return statearr_14509;
})();var statearr_14510_14527 = state_14500__$1;(statearr_14510_14527[2] = null);
(statearr_14510_14527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 8))
{var inst_14491 = cljs.core.async.close_BANG_.call(null,ch);var state_14500__$1 = state_14500;var statearr_14511_14528 = state_14500__$1;(statearr_14511_14528[2] = inst_14491);
(statearr_14511_14528[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 9))
{var state_14500__$1 = state_14500;var statearr_14512_14529 = state_14500__$1;(statearr_14512_14529[2] = null);
(statearr_14512_14529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14501 === 10))
{var inst_14494 = (state_14500[2]);var state_14500__$1 = state_14500;var statearr_14513_14530 = state_14500__$1;(statearr_14513_14530[2] = inst_14494);
(statearr_14513_14530[1] = 6);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_14517 = [null,null,null,null,null,null,null,null,null];(statearr_14517[0] = state_machine__5532__auto__);
(statearr_14517[1] = 1);
return statearr_14517;
});
var state_machine__5532__auto____1 = (function (state_14500){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_14500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e14518){if((e14518 instanceof Object))
{var ex__5535__auto__ = e14518;var statearr_14519_14531 = state_14500;(statearr_14519_14531[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14532 = state_14500;
state_14500 = G__14532;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_14500){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_14500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_14520 = f__5547__auto__.call(null);(statearr_14520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto__);
return statearr_14520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
}));
return c__5546__auto__;
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
cljs.core.async.Mux = (function (){var obj14534 = {};return obj14534;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3419__auto__ = _;if(and__3419__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3419__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4052__auto__ = (((_ == null))?null:_);return (function (){var or__3431__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14536 = {};return obj14536;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14760 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14760 = (function (cs,ch,mult,meta14761){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14761 = meta14761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14760.cljs$lang$type = true;
cljs.core.async.t14760.cljs$lang$ctorStr = "cljs.core.async/t14760";
cljs.core.async.t14760.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t14760");
});})(cs))
;
cljs.core.async.t14760.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14760.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14760.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14760.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14760.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14762){var self__ = this;
var _14762__$1 = this;return self__.meta14761;
});})(cs))
;
cljs.core.async.t14760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14762,meta14761__$1){var self__ = this;
var _14762__$1 = this;return (new cljs.core.async.t14760(self__.cs,self__.ch,self__.mult,meta14761__$1));
});})(cs))
;
cljs.core.async.__GT_t14760 = ((function (cs){
return (function __GT_t14760(cs__$1,ch__$1,mult__$1,meta14761){return (new cljs.core.async.t14760(cs__$1,ch__$1,mult__$1,meta14761));
});})(cs))
;
}
return (new cljs.core.async.t14760(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5546__auto___14983 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_14897){var state_val_14898 = (state_14897[1]);if((state_val_14898 === 32))
{var inst_14765 = (state_14897[7]);var inst_14841 = (state_14897[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14897,31,Object,null,30);var inst_14848 = cljs.core.async.put_BANG_.call(null,inst_14841,inst_14765,done);var state_14897__$1 = state_14897;var statearr_14899_14984 = state_14897__$1;(statearr_14899_14984[2] = inst_14848);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14897__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 1))
{var state_14897__$1 = state_14897;var statearr_14900_14985 = state_14897__$1;(statearr_14900_14985[2] = null);
(statearr_14900_14985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 33))
{var inst_14854 = (state_14897[9]);var inst_14856 = cljs.core.chunked_seq_QMARK_.call(null,inst_14854);var state_14897__$1 = state_14897;if(inst_14856)
{var statearr_14901_14986 = state_14897__$1;(statearr_14901_14986[1] = 36);
} else
{var statearr_14902_14987 = state_14897__$1;(statearr_14902_14987[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 2))
{var state_14897__$1 = state_14897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14897__$1,4,ch);
} else
{if((state_val_14898 === 34))
{var state_14897__$1 = state_14897;var statearr_14903_14988 = state_14897__$1;(statearr_14903_14988[2] = null);
(statearr_14903_14988[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 3))
{var inst_14895 = (state_14897[2]);var state_14897__$1 = state_14897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14897__$1,inst_14895);
} else
{if((state_val_14898 === 35))
{var inst_14879 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14904_14989 = state_14897__$1;(statearr_14904_14989[2] = inst_14879);
(statearr_14904_14989[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 4))
{var inst_14765 = (state_14897[7]);var inst_14765__$1 = (state_14897[2]);var inst_14766 = (inst_14765__$1 == null);var state_14897__$1 = (function (){var statearr_14905 = state_14897;(statearr_14905[7] = inst_14765__$1);
return statearr_14905;
})();if(cljs.core.truth_(inst_14766))
{var statearr_14906_14990 = state_14897__$1;(statearr_14906_14990[1] = 5);
} else
{var statearr_14907_14991 = state_14897__$1;(statearr_14907_14991[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 36))
{var inst_14854 = (state_14897[9]);var inst_14858 = cljs.core.chunk_first.call(null,inst_14854);var inst_14859 = cljs.core.chunk_rest.call(null,inst_14854);var inst_14860 = cljs.core.count.call(null,inst_14858);var inst_14833 = inst_14859;var inst_14834 = inst_14858;var inst_14835 = inst_14860;var inst_14836 = 0;var state_14897__$1 = (function (){var statearr_14908 = state_14897;(statearr_14908[10] = inst_14833);
(statearr_14908[11] = inst_14834);
(statearr_14908[12] = inst_14835);
(statearr_14908[13] = inst_14836);
return statearr_14908;
})();var statearr_14909_14992 = state_14897__$1;(statearr_14909_14992[2] = null);
(statearr_14909_14992[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 5))
{var inst_14772 = cljs.core.deref.call(null,cs);var inst_14773 = cljs.core.seq.call(null,inst_14772);var inst_14774 = inst_14773;var inst_14775 = null;var inst_14776 = 0;var inst_14777 = 0;var state_14897__$1 = (function (){var statearr_14910 = state_14897;(statearr_14910[14] = inst_14777);
(statearr_14910[15] = inst_14776);
(statearr_14910[16] = inst_14775);
(statearr_14910[17] = inst_14774);
return statearr_14910;
})();var statearr_14911_14993 = state_14897__$1;(statearr_14911_14993[2] = null);
(statearr_14911_14993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 37))
{var inst_14854 = (state_14897[9]);var inst_14863 = cljs.core.first.call(null,inst_14854);var state_14897__$1 = (function (){var statearr_14912 = state_14897;(statearr_14912[18] = inst_14863);
return statearr_14912;
})();var statearr_14913_14994 = state_14897__$1;(statearr_14913_14994[2] = null);
(statearr_14913_14994[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 6))
{var inst_14825 = (state_14897[19]);var inst_14824 = cljs.core.deref.call(null,cs);var inst_14825__$1 = cljs.core.keys.call(null,inst_14824);var inst_14826 = cljs.core.count.call(null,inst_14825__$1);var inst_14827 = cljs.core.reset_BANG_.call(null,dctr,inst_14826);var inst_14832 = cljs.core.seq.call(null,inst_14825__$1);var inst_14833 = inst_14832;var inst_14834 = null;var inst_14835 = 0;var inst_14836 = 0;var state_14897__$1 = (function (){var statearr_14914 = state_14897;(statearr_14914[20] = inst_14827);
(statearr_14914[10] = inst_14833);
(statearr_14914[11] = inst_14834);
(statearr_14914[12] = inst_14835);
(statearr_14914[13] = inst_14836);
(statearr_14914[19] = inst_14825__$1);
return statearr_14914;
})();var statearr_14915_14995 = state_14897__$1;(statearr_14915_14995[2] = null);
(statearr_14915_14995[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 38))
{var inst_14876 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14916_14996 = state_14897__$1;(statearr_14916_14996[2] = inst_14876);
(statearr_14916_14996[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 7))
{var inst_14893 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14917_14997 = state_14897__$1;(statearr_14917_14997[2] = inst_14893);
(statearr_14917_14997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 39))
{var inst_14854 = (state_14897[9]);var inst_14872 = (state_14897[2]);var inst_14873 = cljs.core.next.call(null,inst_14854);var inst_14833 = inst_14873;var inst_14834 = null;var inst_14835 = 0;var inst_14836 = 0;var state_14897__$1 = (function (){var statearr_14918 = state_14897;(statearr_14918[10] = inst_14833);
(statearr_14918[11] = inst_14834);
(statearr_14918[12] = inst_14835);
(statearr_14918[13] = inst_14836);
(statearr_14918[21] = inst_14872);
return statearr_14918;
})();var statearr_14919_14998 = state_14897__$1;(statearr_14919_14998[2] = null);
(statearr_14919_14998[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 8))
{var inst_14777 = (state_14897[14]);var inst_14776 = (state_14897[15]);var inst_14779 = (inst_14777 < inst_14776);var inst_14780 = inst_14779;var state_14897__$1 = state_14897;if(cljs.core.truth_(inst_14780))
{var statearr_14920_14999 = state_14897__$1;(statearr_14920_14999[1] = 10);
} else
{var statearr_14921_15000 = state_14897__$1;(statearr_14921_15000[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 40))
{var inst_14863 = (state_14897[18]);var inst_14864 = (state_14897[2]);var inst_14865 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14866 = cljs.core.async.untap_STAR_.call(null,m,inst_14863);var state_14897__$1 = (function (){var statearr_14922 = state_14897;(statearr_14922[22] = inst_14865);
(statearr_14922[23] = inst_14864);
return statearr_14922;
})();var statearr_14923_15001 = state_14897__$1;(statearr_14923_15001[2] = inst_14866);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14897__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 9))
{var inst_14822 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14924_15002 = state_14897__$1;(statearr_14924_15002[2] = inst_14822);
(statearr_14924_15002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 41))
{var inst_14765 = (state_14897[7]);var inst_14863 = (state_14897[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14897,40,Object,null,39);var inst_14870 = cljs.core.async.put_BANG_.call(null,inst_14863,inst_14765,done);var state_14897__$1 = state_14897;var statearr_14925_15003 = state_14897__$1;(statearr_14925_15003[2] = inst_14870);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14897__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 10))
{var inst_14777 = (state_14897[14]);var inst_14775 = (state_14897[16]);var inst_14783 = cljs.core._nth.call(null,inst_14775,inst_14777);var inst_14784 = cljs.core.nth.call(null,inst_14783,0,null);var inst_14785 = cljs.core.nth.call(null,inst_14783,1,null);var state_14897__$1 = (function (){var statearr_14926 = state_14897;(statearr_14926[24] = inst_14784);
return statearr_14926;
})();if(cljs.core.truth_(inst_14785))
{var statearr_14927_15004 = state_14897__$1;(statearr_14927_15004[1] = 13);
} else
{var statearr_14928_15005 = state_14897__$1;(statearr_14928_15005[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 42))
{var state_14897__$1 = state_14897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14897__$1,45,dchan);
} else
{if((state_val_14898 === 11))
{var inst_14774 = (state_14897[17]);var inst_14794 = (state_14897[25]);var inst_14794__$1 = cljs.core.seq.call(null,inst_14774);var state_14897__$1 = (function (){var statearr_14929 = state_14897;(statearr_14929[25] = inst_14794__$1);
return statearr_14929;
})();if(inst_14794__$1)
{var statearr_14930_15006 = state_14897__$1;(statearr_14930_15006[1] = 16);
} else
{var statearr_14931_15007 = state_14897__$1;(statearr_14931_15007[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 43))
{var state_14897__$1 = state_14897;var statearr_14932_15008 = state_14897__$1;(statearr_14932_15008[2] = null);
(statearr_14932_15008[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 12))
{var inst_14820 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14933_15009 = state_14897__$1;(statearr_14933_15009[2] = inst_14820);
(statearr_14933_15009[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 44))
{var inst_14890 = (state_14897[2]);var state_14897__$1 = (function (){var statearr_14934 = state_14897;(statearr_14934[26] = inst_14890);
return statearr_14934;
})();var statearr_14935_15010 = state_14897__$1;(statearr_14935_15010[2] = null);
(statearr_14935_15010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 13))
{var inst_14784 = (state_14897[24]);var inst_14787 = cljs.core.async.close_BANG_.call(null,inst_14784);var state_14897__$1 = state_14897;var statearr_14936_15011 = state_14897__$1;(statearr_14936_15011[2] = inst_14787);
(statearr_14936_15011[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 45))
{var inst_14887 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14940_15012 = state_14897__$1;(statearr_14940_15012[2] = inst_14887);
(statearr_14940_15012[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 14))
{var state_14897__$1 = state_14897;var statearr_14941_15013 = state_14897__$1;(statearr_14941_15013[2] = null);
(statearr_14941_15013[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 15))
{var inst_14777 = (state_14897[14]);var inst_14776 = (state_14897[15]);var inst_14775 = (state_14897[16]);var inst_14774 = (state_14897[17]);var inst_14790 = (state_14897[2]);var inst_14791 = (inst_14777 + 1);var tmp14937 = inst_14776;var tmp14938 = inst_14775;var tmp14939 = inst_14774;var inst_14774__$1 = tmp14939;var inst_14775__$1 = tmp14938;var inst_14776__$1 = tmp14937;var inst_14777__$1 = inst_14791;var state_14897__$1 = (function (){var statearr_14942 = state_14897;(statearr_14942[14] = inst_14777__$1);
(statearr_14942[15] = inst_14776__$1);
(statearr_14942[16] = inst_14775__$1);
(statearr_14942[17] = inst_14774__$1);
(statearr_14942[27] = inst_14790);
return statearr_14942;
})();var statearr_14943_15014 = state_14897__$1;(statearr_14943_15014[2] = null);
(statearr_14943_15014[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 16))
{var inst_14794 = (state_14897[25]);var inst_14796 = cljs.core.chunked_seq_QMARK_.call(null,inst_14794);var state_14897__$1 = state_14897;if(inst_14796)
{var statearr_14944_15015 = state_14897__$1;(statearr_14944_15015[1] = 19);
} else
{var statearr_14945_15016 = state_14897__$1;(statearr_14945_15016[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 17))
{var state_14897__$1 = state_14897;var statearr_14946_15017 = state_14897__$1;(statearr_14946_15017[2] = null);
(statearr_14946_15017[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 18))
{var inst_14818 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14947_15018 = state_14897__$1;(statearr_14947_15018[2] = inst_14818);
(statearr_14947_15018[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 19))
{var inst_14794 = (state_14897[25]);var inst_14798 = cljs.core.chunk_first.call(null,inst_14794);var inst_14799 = cljs.core.chunk_rest.call(null,inst_14794);var inst_14800 = cljs.core.count.call(null,inst_14798);var inst_14774 = inst_14799;var inst_14775 = inst_14798;var inst_14776 = inst_14800;var inst_14777 = 0;var state_14897__$1 = (function (){var statearr_14948 = state_14897;(statearr_14948[14] = inst_14777);
(statearr_14948[15] = inst_14776);
(statearr_14948[16] = inst_14775);
(statearr_14948[17] = inst_14774);
return statearr_14948;
})();var statearr_14949_15019 = state_14897__$1;(statearr_14949_15019[2] = null);
(statearr_14949_15019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 20))
{var inst_14794 = (state_14897[25]);var inst_14804 = cljs.core.first.call(null,inst_14794);var inst_14805 = cljs.core.nth.call(null,inst_14804,0,null);var inst_14806 = cljs.core.nth.call(null,inst_14804,1,null);var state_14897__$1 = (function (){var statearr_14950 = state_14897;(statearr_14950[28] = inst_14805);
return statearr_14950;
})();if(cljs.core.truth_(inst_14806))
{var statearr_14951_15020 = state_14897__$1;(statearr_14951_15020[1] = 22);
} else
{var statearr_14952_15021 = state_14897__$1;(statearr_14952_15021[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 21))
{var inst_14815 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14953_15022 = state_14897__$1;(statearr_14953_15022[2] = inst_14815);
(statearr_14953_15022[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 22))
{var inst_14805 = (state_14897[28]);var inst_14808 = cljs.core.async.close_BANG_.call(null,inst_14805);var state_14897__$1 = state_14897;var statearr_14954_15023 = state_14897__$1;(statearr_14954_15023[2] = inst_14808);
(statearr_14954_15023[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 23))
{var state_14897__$1 = state_14897;var statearr_14955_15024 = state_14897__$1;(statearr_14955_15024[2] = null);
(statearr_14955_15024[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 24))
{var inst_14794 = (state_14897[25]);var inst_14811 = (state_14897[2]);var inst_14812 = cljs.core.next.call(null,inst_14794);var inst_14774 = inst_14812;var inst_14775 = null;var inst_14776 = 0;var inst_14777 = 0;var state_14897__$1 = (function (){var statearr_14956 = state_14897;(statearr_14956[14] = inst_14777);
(statearr_14956[15] = inst_14776);
(statearr_14956[16] = inst_14775);
(statearr_14956[17] = inst_14774);
(statearr_14956[29] = inst_14811);
return statearr_14956;
})();var statearr_14957_15025 = state_14897__$1;(statearr_14957_15025[2] = null);
(statearr_14957_15025[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 25))
{var inst_14835 = (state_14897[12]);var inst_14836 = (state_14897[13]);var inst_14838 = (inst_14836 < inst_14835);var inst_14839 = inst_14838;var state_14897__$1 = state_14897;if(cljs.core.truth_(inst_14839))
{var statearr_14958_15026 = state_14897__$1;(statearr_14958_15026[1] = 27);
} else
{var statearr_14959_15027 = state_14897__$1;(statearr_14959_15027[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 26))
{var inst_14825 = (state_14897[19]);var inst_14883 = (state_14897[2]);var inst_14884 = cljs.core.seq.call(null,inst_14825);var state_14897__$1 = (function (){var statearr_14960 = state_14897;(statearr_14960[30] = inst_14883);
return statearr_14960;
})();if(inst_14884)
{var statearr_14961_15028 = state_14897__$1;(statearr_14961_15028[1] = 42);
} else
{var statearr_14962_15029 = state_14897__$1;(statearr_14962_15029[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 27))
{var inst_14834 = (state_14897[11]);var inst_14836 = (state_14897[13]);var inst_14841 = cljs.core._nth.call(null,inst_14834,inst_14836);var state_14897__$1 = (function (){var statearr_14963 = state_14897;(statearr_14963[8] = inst_14841);
return statearr_14963;
})();var statearr_14964_15030 = state_14897__$1;(statearr_14964_15030[2] = null);
(statearr_14964_15030[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 28))
{var inst_14854 = (state_14897[9]);var inst_14833 = (state_14897[10]);var inst_14854__$1 = cljs.core.seq.call(null,inst_14833);var state_14897__$1 = (function (){var statearr_14968 = state_14897;(statearr_14968[9] = inst_14854__$1);
return statearr_14968;
})();if(inst_14854__$1)
{var statearr_14969_15031 = state_14897__$1;(statearr_14969_15031[1] = 33);
} else
{var statearr_14970_15032 = state_14897__$1;(statearr_14970_15032[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 29))
{var inst_14881 = (state_14897[2]);var state_14897__$1 = state_14897;var statearr_14971_15033 = state_14897__$1;(statearr_14971_15033[2] = inst_14881);
(statearr_14971_15033[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 30))
{var inst_14833 = (state_14897[10]);var inst_14834 = (state_14897[11]);var inst_14835 = (state_14897[12]);var inst_14836 = (state_14897[13]);var inst_14850 = (state_14897[2]);var inst_14851 = (inst_14836 + 1);var tmp14965 = inst_14833;var tmp14966 = inst_14834;var tmp14967 = inst_14835;var inst_14833__$1 = tmp14965;var inst_14834__$1 = tmp14966;var inst_14835__$1 = tmp14967;var inst_14836__$1 = inst_14851;var state_14897__$1 = (function (){var statearr_14972 = state_14897;(statearr_14972[31] = inst_14850);
(statearr_14972[10] = inst_14833__$1);
(statearr_14972[11] = inst_14834__$1);
(statearr_14972[12] = inst_14835__$1);
(statearr_14972[13] = inst_14836__$1);
return statearr_14972;
})();var statearr_14973_15034 = state_14897__$1;(statearr_14973_15034[2] = null);
(statearr_14973_15034[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14898 === 31))
{var inst_14841 = (state_14897[8]);var inst_14842 = (state_14897[2]);var inst_14843 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14844 = cljs.core.async.untap_STAR_.call(null,m,inst_14841);var state_14897__$1 = (function (){var statearr_14974 = state_14897;(statearr_14974[32] = inst_14843);
(statearr_14974[33] = inst_14842);
return statearr_14974;
})();var statearr_14975_15035 = state_14897__$1;(statearr_14975_15035[2] = inst_14844);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14897__$1);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_14979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14979[0] = state_machine__5532__auto__);
(statearr_14979[1] = 1);
return statearr_14979;
});
var state_machine__5532__auto____1 = (function (state_14897){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_14897);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e14980){if((e14980 instanceof Object))
{var ex__5535__auto__ = e14980;var statearr_14981_15036 = state_14897;(statearr_14981_15036[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14897);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15037 = state_14897;
state_14897 = G__15037;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_14897){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_14897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_14982 = f__5547__auto__.call(null);(statearr_14982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___14983);
return statearr_14982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
cljs.core.async.Mix = (function (){var obj15039 = {};return obj15039;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3419__auto__ = m;if(and__3419__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3419__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4052__auto__ = (((m == null))?null:m);return (function (){var or__3431__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t15149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15149 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15150){
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
this.meta15150 = meta15150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15149.cljs$lang$type = true;
cljs.core.async.t15149.cljs$lang$ctorStr = "cljs.core.async/t15149";
cljs.core.async.t15149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t15149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15151){var self__ = this;
var _15151__$1 = this;return self__.meta15150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15151,meta15150__$1){var self__ = this;
var _15151__$1 = this;return (new cljs.core.async.t15149(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15149(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15150){return (new cljs.core.async.t15149(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15149(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5546__auto___15258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_15216){var state_val_15217 = (state_15216[1]);if((state_val_15217 === 1))
{var inst_15155 = (state_15216[7]);var inst_15155__$1 = calc_state.call(null);var inst_15156 = cljs.core.seq_QMARK_.call(null,inst_15155__$1);var state_15216__$1 = (function (){var statearr_15218 = state_15216;(statearr_15218[7] = inst_15155__$1);
return statearr_15218;
})();if(inst_15156)
{var statearr_15219_15259 = state_15216__$1;(statearr_15219_15259[1] = 2);
} else
{var statearr_15220_15260 = state_15216__$1;(statearr_15220_15260[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 2))
{var inst_15155 = (state_15216[7]);var inst_15158 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15155);var state_15216__$1 = state_15216;var statearr_15221_15261 = state_15216__$1;(statearr_15221_15261[2] = inst_15158);
(statearr_15221_15261[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 3))
{var inst_15155 = (state_15216[7]);var state_15216__$1 = state_15216;var statearr_15222_15262 = state_15216__$1;(statearr_15222_15262[2] = inst_15155);
(statearr_15222_15262[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 4))
{var inst_15155 = (state_15216[7]);var inst_15161 = (state_15216[2]);var inst_15162 = cljs.core.get.call(null,inst_15161,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15163 = cljs.core.get.call(null,inst_15161,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15164 = cljs.core.get.call(null,inst_15161,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15165 = inst_15155;var state_15216__$1 = (function (){var statearr_15223 = state_15216;(statearr_15223[8] = inst_15163);
(statearr_15223[9] = inst_15162);
(statearr_15223[10] = inst_15165);
(statearr_15223[11] = inst_15164);
return statearr_15223;
})();var statearr_15224_15263 = state_15216__$1;(statearr_15224_15263[2] = null);
(statearr_15224_15263[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 5))
{var inst_15165 = (state_15216[10]);var inst_15168 = cljs.core.seq_QMARK_.call(null,inst_15165);var state_15216__$1 = state_15216;if(inst_15168)
{var statearr_15225_15264 = state_15216__$1;(statearr_15225_15264[1] = 7);
} else
{var statearr_15226_15265 = state_15216__$1;(statearr_15226_15265[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 6))
{var inst_15214 = (state_15216[2]);var state_15216__$1 = state_15216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15216__$1,inst_15214);
} else
{if((state_val_15217 === 7))
{var inst_15165 = (state_15216[10]);var inst_15170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15165);var state_15216__$1 = state_15216;var statearr_15227_15266 = state_15216__$1;(statearr_15227_15266[2] = inst_15170);
(statearr_15227_15266[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 8))
{var inst_15165 = (state_15216[10]);var state_15216__$1 = state_15216;var statearr_15228_15267 = state_15216__$1;(statearr_15228_15267[2] = inst_15165);
(statearr_15228_15267[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 9))
{var inst_15173 = (state_15216[12]);var inst_15173__$1 = (state_15216[2]);var inst_15174 = cljs.core.get.call(null,inst_15173__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15175 = cljs.core.get.call(null,inst_15173__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15176 = cljs.core.get.call(null,inst_15173__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15216__$1 = (function (){var statearr_15229 = state_15216;(statearr_15229[12] = inst_15173__$1);
(statearr_15229[13] = inst_15176);
(statearr_15229[14] = inst_15175);
return statearr_15229;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15216__$1,10,inst_15174);
} else
{if((state_val_15217 === 10))
{var inst_15180 = (state_15216[15]);var inst_15181 = (state_15216[16]);var inst_15179 = (state_15216[2]);var inst_15180__$1 = cljs.core.nth.call(null,inst_15179,0,null);var inst_15181__$1 = cljs.core.nth.call(null,inst_15179,1,null);var inst_15182 = (inst_15180__$1 == null);var inst_15183 = cljs.core._EQ_.call(null,inst_15181__$1,change);var inst_15184 = (inst_15182) || (inst_15183);var state_15216__$1 = (function (){var statearr_15230 = state_15216;(statearr_15230[15] = inst_15180__$1);
(statearr_15230[16] = inst_15181__$1);
return statearr_15230;
})();if(cljs.core.truth_(inst_15184))
{var statearr_15231_15268 = state_15216__$1;(statearr_15231_15268[1] = 11);
} else
{var statearr_15232_15269 = state_15216__$1;(statearr_15232_15269[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 11))
{var inst_15180 = (state_15216[15]);var inst_15186 = (inst_15180 == null);var state_15216__$1 = state_15216;if(cljs.core.truth_(inst_15186))
{var statearr_15233_15270 = state_15216__$1;(statearr_15233_15270[1] = 14);
} else
{var statearr_15234_15271 = state_15216__$1;(statearr_15234_15271[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 12))
{var inst_15176 = (state_15216[13]);var inst_15181 = (state_15216[16]);var inst_15195 = (state_15216[17]);var inst_15195__$1 = inst_15176.call(null,inst_15181);var state_15216__$1 = (function (){var statearr_15235 = state_15216;(statearr_15235[17] = inst_15195__$1);
return statearr_15235;
})();if(cljs.core.truth_(inst_15195__$1))
{var statearr_15236_15272 = state_15216__$1;(statearr_15236_15272[1] = 17);
} else
{var statearr_15237_15273 = state_15216__$1;(statearr_15237_15273[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 13))
{var inst_15212 = (state_15216[2]);var state_15216__$1 = state_15216;var statearr_15238_15274 = state_15216__$1;(statearr_15238_15274[2] = inst_15212);
(statearr_15238_15274[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 14))
{var inst_15181 = (state_15216[16]);var inst_15188 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15181);var state_15216__$1 = state_15216;var statearr_15239_15275 = state_15216__$1;(statearr_15239_15275[2] = inst_15188);
(statearr_15239_15275[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 15))
{var state_15216__$1 = state_15216;var statearr_15240_15276 = state_15216__$1;(statearr_15240_15276[2] = null);
(statearr_15240_15276[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 16))
{var inst_15191 = (state_15216[2]);var inst_15192 = calc_state.call(null);var inst_15165 = inst_15192;var state_15216__$1 = (function (){var statearr_15241 = state_15216;(statearr_15241[18] = inst_15191);
(statearr_15241[10] = inst_15165);
return statearr_15241;
})();var statearr_15242_15277 = state_15216__$1;(statearr_15242_15277[2] = null);
(statearr_15242_15277[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 17))
{var inst_15195 = (state_15216[17]);var state_15216__$1 = state_15216;var statearr_15243_15278 = state_15216__$1;(statearr_15243_15278[2] = inst_15195);
(statearr_15243_15278[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 18))
{var inst_15176 = (state_15216[13]);var inst_15175 = (state_15216[14]);var inst_15181 = (state_15216[16]);var inst_15198 = cljs.core.empty_QMARK_.call(null,inst_15176);var inst_15199 = inst_15175.call(null,inst_15181);var inst_15200 = cljs.core.not.call(null,inst_15199);var inst_15201 = (inst_15198) && (inst_15200);var state_15216__$1 = state_15216;var statearr_15244_15279 = state_15216__$1;(statearr_15244_15279[2] = inst_15201);
(statearr_15244_15279[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 19))
{var inst_15203 = (state_15216[2]);var state_15216__$1 = state_15216;if(cljs.core.truth_(inst_15203))
{var statearr_15245_15280 = state_15216__$1;(statearr_15245_15280[1] = 20);
} else
{var statearr_15246_15281 = state_15216__$1;(statearr_15246_15281[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 20))
{var inst_15180 = (state_15216[15]);var state_15216__$1 = state_15216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15216__$1,23,out,inst_15180);
} else
{if((state_val_15217 === 21))
{var state_15216__$1 = state_15216;var statearr_15247_15282 = state_15216__$1;(statearr_15247_15282[2] = null);
(statearr_15247_15282[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 22))
{var inst_15173 = (state_15216[12]);var inst_15209 = (state_15216[2]);var inst_15165 = inst_15173;var state_15216__$1 = (function (){var statearr_15248 = state_15216;(statearr_15248[19] = inst_15209);
(statearr_15248[10] = inst_15165);
return statearr_15248;
})();var statearr_15249_15283 = state_15216__$1;(statearr_15249_15283[2] = null);
(statearr_15249_15283[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15217 === 23))
{var inst_15206 = (state_15216[2]);var state_15216__$1 = state_15216;var statearr_15250_15284 = state_15216__$1;(statearr_15250_15284[2] = inst_15206);
(statearr_15250_15284[1] = 22);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_15254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15254[0] = state_machine__5532__auto__);
(statearr_15254[1] = 1);
return statearr_15254;
});
var state_machine__5532__auto____1 = (function (state_15216){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_15216);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e15255){if((e15255 instanceof Object))
{var ex__5535__auto__ = e15255;var statearr_15256_15285 = state_15216;(statearr_15256_15285[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15286 = state_15216;
state_15216 = G__15286;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_15216){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_15216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_15257 = f__5547__auto__.call(null);(statearr_15257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___15258);
return statearr_15257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
cljs.core.async.Pub = (function (){var obj15288 = {};return obj15288;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3419__auto__ = p;if(and__3419__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3419__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4052__auto__ = (((p == null))?null:p);return (function (){var or__3431__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3419__auto__ = p;if(and__3419__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3419__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4052__auto__ = (((p == null))?null:p);return (function (){var or__3431__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3419__auto__ = p;if(and__3419__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3419__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4052__auto__ = (((p == null))?null:p);return (function (){var or__3431__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3419__auto__ = p;if(and__3419__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3419__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4052__auto__ = (((p == null))?null:p);return (function (){var or__3431__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
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
return (function (topic){var or__3431__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3431__auto__,mults){
return (function (p1__15289_SHARP_){if(cljs.core.truth_(p1__15289_SHARP_.call(null,topic)))
{return p1__15289_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15289_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3431__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15414 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15415){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15415 = meta15415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15414.cljs$lang$type = true;
cljs.core.async.t15414.cljs$lang$ctorStr = "cljs.core.async/t15414";
cljs.core.async.t15414.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write.call(null,writer__3994__auto__,"cljs.core.async/t15414");
});})(mults,ensure_mult))
;
cljs.core.async.t15414.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15414.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15416){var self__ = this;
var _15416__$1 = this;return self__.meta15415;
});})(mults,ensure_mult))
;
cljs.core.async.t15414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15416,meta15415__$1){var self__ = this;
var _15416__$1 = this;return (new cljs.core.async.t15414(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15415__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15414 = ((function (mults,ensure_mult){
return (function __GT_t15414(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15415){return (new cljs.core.async.t15414(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15415));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15414(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5546__auto___15538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_15490){var state_val_15491 = (state_15490[1]);if((state_val_15491 === 1))
{var state_15490__$1 = state_15490;var statearr_15492_15539 = state_15490__$1;(statearr_15492_15539[2] = null);
(statearr_15492_15539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 2))
{var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15490__$1,4,ch);
} else
{if((state_val_15491 === 3))
{var inst_15488 = (state_15490[2]);var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15490__$1,inst_15488);
} else
{if((state_val_15491 === 4))
{var inst_15419 = (state_15490[7]);var inst_15419__$1 = (state_15490[2]);var inst_15420 = (inst_15419__$1 == null);var state_15490__$1 = (function (){var statearr_15493 = state_15490;(statearr_15493[7] = inst_15419__$1);
return statearr_15493;
})();if(cljs.core.truth_(inst_15420))
{var statearr_15494_15540 = state_15490__$1;(statearr_15494_15540[1] = 5);
} else
{var statearr_15495_15541 = state_15490__$1;(statearr_15495_15541[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 5))
{var inst_15426 = cljs.core.deref.call(null,mults);var inst_15427 = cljs.core.vals.call(null,inst_15426);var inst_15428 = cljs.core.seq.call(null,inst_15427);var inst_15429 = inst_15428;var inst_15430 = null;var inst_15431 = 0;var inst_15432 = 0;var state_15490__$1 = (function (){var statearr_15496 = state_15490;(statearr_15496[8] = inst_15432);
(statearr_15496[9] = inst_15430);
(statearr_15496[10] = inst_15431);
(statearr_15496[11] = inst_15429);
return statearr_15496;
})();var statearr_15497_15542 = state_15490__$1;(statearr_15497_15542[2] = null);
(statearr_15497_15542[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 6))
{var inst_15469 = (state_15490[12]);var inst_15467 = (state_15490[13]);var inst_15419 = (state_15490[7]);var inst_15467__$1 = topic_fn.call(null,inst_15419);var inst_15468 = cljs.core.deref.call(null,mults);var inst_15469__$1 = cljs.core.get.call(null,inst_15468,inst_15467__$1);var state_15490__$1 = (function (){var statearr_15498 = state_15490;(statearr_15498[12] = inst_15469__$1);
(statearr_15498[13] = inst_15467__$1);
return statearr_15498;
})();if(cljs.core.truth_(inst_15469__$1))
{var statearr_15499_15543 = state_15490__$1;(statearr_15499_15543[1] = 19);
} else
{var statearr_15500_15544 = state_15490__$1;(statearr_15500_15544[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 7))
{var inst_15486 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15501_15545 = state_15490__$1;(statearr_15501_15545[2] = inst_15486);
(statearr_15501_15545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 8))
{var inst_15432 = (state_15490[8]);var inst_15431 = (state_15490[10]);var inst_15434 = (inst_15432 < inst_15431);var inst_15435 = inst_15434;var state_15490__$1 = state_15490;if(cljs.core.truth_(inst_15435))
{var statearr_15505_15546 = state_15490__$1;(statearr_15505_15546[1] = 10);
} else
{var statearr_15506_15547 = state_15490__$1;(statearr_15506_15547[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 9))
{var inst_15465 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15507_15548 = state_15490__$1;(statearr_15507_15548[2] = inst_15465);
(statearr_15507_15548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 10))
{var inst_15432 = (state_15490[8]);var inst_15430 = (state_15490[9]);var inst_15431 = (state_15490[10]);var inst_15429 = (state_15490[11]);var inst_15437 = cljs.core._nth.call(null,inst_15430,inst_15432);var inst_15438 = cljs.core.async.muxch_STAR_.call(null,inst_15437);var inst_15439 = cljs.core.async.close_BANG_.call(null,inst_15438);var inst_15440 = (inst_15432 + 1);var tmp15502 = inst_15430;var tmp15503 = inst_15431;var tmp15504 = inst_15429;var inst_15429__$1 = tmp15504;var inst_15430__$1 = tmp15502;var inst_15431__$1 = tmp15503;var inst_15432__$1 = inst_15440;var state_15490__$1 = (function (){var statearr_15508 = state_15490;(statearr_15508[8] = inst_15432__$1);
(statearr_15508[9] = inst_15430__$1);
(statearr_15508[10] = inst_15431__$1);
(statearr_15508[14] = inst_15439);
(statearr_15508[11] = inst_15429__$1);
return statearr_15508;
})();var statearr_15509_15549 = state_15490__$1;(statearr_15509_15549[2] = null);
(statearr_15509_15549[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 11))
{var inst_15443 = (state_15490[15]);var inst_15429 = (state_15490[11]);var inst_15443__$1 = cljs.core.seq.call(null,inst_15429);var state_15490__$1 = (function (){var statearr_15510 = state_15490;(statearr_15510[15] = inst_15443__$1);
return statearr_15510;
})();if(inst_15443__$1)
{var statearr_15511_15550 = state_15490__$1;(statearr_15511_15550[1] = 13);
} else
{var statearr_15512_15551 = state_15490__$1;(statearr_15512_15551[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 12))
{var inst_15463 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15513_15552 = state_15490__$1;(statearr_15513_15552[2] = inst_15463);
(statearr_15513_15552[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 13))
{var inst_15443 = (state_15490[15]);var inst_15445 = cljs.core.chunked_seq_QMARK_.call(null,inst_15443);var state_15490__$1 = state_15490;if(inst_15445)
{var statearr_15514_15553 = state_15490__$1;(statearr_15514_15553[1] = 16);
} else
{var statearr_15515_15554 = state_15490__$1;(statearr_15515_15554[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 14))
{var state_15490__$1 = state_15490;var statearr_15516_15555 = state_15490__$1;(statearr_15516_15555[2] = null);
(statearr_15516_15555[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 15))
{var inst_15461 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15517_15556 = state_15490__$1;(statearr_15517_15556[2] = inst_15461);
(statearr_15517_15556[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 16))
{var inst_15443 = (state_15490[15]);var inst_15447 = cljs.core.chunk_first.call(null,inst_15443);var inst_15448 = cljs.core.chunk_rest.call(null,inst_15443);var inst_15449 = cljs.core.count.call(null,inst_15447);var inst_15429 = inst_15448;var inst_15430 = inst_15447;var inst_15431 = inst_15449;var inst_15432 = 0;var state_15490__$1 = (function (){var statearr_15518 = state_15490;(statearr_15518[8] = inst_15432);
(statearr_15518[9] = inst_15430);
(statearr_15518[10] = inst_15431);
(statearr_15518[11] = inst_15429);
return statearr_15518;
})();var statearr_15519_15557 = state_15490__$1;(statearr_15519_15557[2] = null);
(statearr_15519_15557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 17))
{var inst_15443 = (state_15490[15]);var inst_15452 = cljs.core.first.call(null,inst_15443);var inst_15453 = cljs.core.async.muxch_STAR_.call(null,inst_15452);var inst_15454 = cljs.core.async.close_BANG_.call(null,inst_15453);var inst_15455 = cljs.core.next.call(null,inst_15443);var inst_15429 = inst_15455;var inst_15430 = null;var inst_15431 = 0;var inst_15432 = 0;var state_15490__$1 = (function (){var statearr_15520 = state_15490;(statearr_15520[16] = inst_15454);
(statearr_15520[8] = inst_15432);
(statearr_15520[9] = inst_15430);
(statearr_15520[10] = inst_15431);
(statearr_15520[11] = inst_15429);
return statearr_15520;
})();var statearr_15521_15558 = state_15490__$1;(statearr_15521_15558[2] = null);
(statearr_15521_15558[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 18))
{var inst_15458 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15522_15559 = state_15490__$1;(statearr_15522_15559[2] = inst_15458);
(statearr_15522_15559[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 19))
{var state_15490__$1 = state_15490;var statearr_15523_15560 = state_15490__$1;(statearr_15523_15560[2] = null);
(statearr_15523_15560[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 20))
{var state_15490__$1 = state_15490;var statearr_15524_15561 = state_15490__$1;(statearr_15524_15561[2] = null);
(statearr_15524_15561[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 21))
{var inst_15483 = (state_15490[2]);var state_15490__$1 = (function (){var statearr_15525 = state_15490;(statearr_15525[17] = inst_15483);
return statearr_15525;
})();var statearr_15526_15562 = state_15490__$1;(statearr_15526_15562[2] = null);
(statearr_15526_15562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 22))
{var inst_15480 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15527_15563 = state_15490__$1;(statearr_15527_15563[2] = inst_15480);
(statearr_15527_15563[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 23))
{var inst_15467 = (state_15490[13]);var inst_15471 = (state_15490[2]);var inst_15472 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15467);var state_15490__$1 = (function (){var statearr_15528 = state_15490;(statearr_15528[18] = inst_15471);
return statearr_15528;
})();var statearr_15529_15564 = state_15490__$1;(statearr_15529_15564[2] = inst_15472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15490__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 24))
{var inst_15469 = (state_15490[12]);var inst_15419 = (state_15490[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15490,23,Object,null,22);var inst_15476 = cljs.core.async.muxch_STAR_.call(null,inst_15469);var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15490__$1,25,inst_15476,inst_15419);
} else
{if((state_val_15491 === 25))
{var inst_15478 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15530_15565 = state_15490__$1;(statearr_15530_15565[2] = inst_15478);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15490__$1);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_15534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15534[0] = state_machine__5532__auto__);
(statearr_15534[1] = 1);
return statearr_15534;
});
var state_machine__5532__auto____1 = (function (state_15490){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_15490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e15535){if((e15535 instanceof Object))
{var ex__5535__auto__ = e15535;var statearr_15536_15566 = state_15490;(statearr_15536_15566[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15567 = state_15490;
state_15490 = G__15567;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_15490){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_15490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_15537 = f__5547__auto__.call(null);(statearr_15537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___15538);
return statearr_15537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
,cljs.core.range.call(null,cnt));var c__5546__auto___15704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_15674){var state_val_15675 = (state_15674[1]);if((state_val_15675 === 1))
{var state_15674__$1 = state_15674;var statearr_15676_15705 = state_15674__$1;(statearr_15676_15705[2] = null);
(statearr_15676_15705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 2))
{var inst_15637 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15638 = 0;var state_15674__$1 = (function (){var statearr_15677 = state_15674;(statearr_15677[7] = inst_15637);
(statearr_15677[8] = inst_15638);
return statearr_15677;
})();var statearr_15678_15706 = state_15674__$1;(statearr_15678_15706[2] = null);
(statearr_15678_15706[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 3))
{var inst_15672 = (state_15674[2]);var state_15674__$1 = state_15674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15674__$1,inst_15672);
} else
{if((state_val_15675 === 4))
{var inst_15638 = (state_15674[8]);var inst_15640 = (inst_15638 < cnt);var state_15674__$1 = state_15674;if(cljs.core.truth_(inst_15640))
{var statearr_15679_15707 = state_15674__$1;(statearr_15679_15707[1] = 6);
} else
{var statearr_15680_15708 = state_15674__$1;(statearr_15680_15708[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 5))
{var inst_15658 = (state_15674[2]);var state_15674__$1 = (function (){var statearr_15681 = state_15674;(statearr_15681[9] = inst_15658);
return statearr_15681;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15674__$1,12,dchan);
} else
{if((state_val_15675 === 6))
{var state_15674__$1 = state_15674;var statearr_15682_15709 = state_15674__$1;(statearr_15682_15709[2] = null);
(statearr_15682_15709[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 7))
{var state_15674__$1 = state_15674;var statearr_15683_15710 = state_15674__$1;(statearr_15683_15710[2] = null);
(statearr_15683_15710[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 8))
{var inst_15656 = (state_15674[2]);var state_15674__$1 = state_15674;var statearr_15684_15711 = state_15674__$1;(statearr_15684_15711[2] = inst_15656);
(statearr_15684_15711[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 9))
{var inst_15638 = (state_15674[8]);var inst_15651 = (state_15674[2]);var inst_15652 = (inst_15638 + 1);var inst_15638__$1 = inst_15652;var state_15674__$1 = (function (){var statearr_15685 = state_15674;(statearr_15685[10] = inst_15651);
(statearr_15685[8] = inst_15638__$1);
return statearr_15685;
})();var statearr_15686_15712 = state_15674__$1;(statearr_15686_15712[2] = null);
(statearr_15686_15712[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 10))
{var inst_15642 = (state_15674[2]);var inst_15643 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15674__$1 = (function (){var statearr_15687 = state_15674;(statearr_15687[11] = inst_15642);
return statearr_15687;
})();var statearr_15688_15713 = state_15674__$1;(statearr_15688_15713[2] = inst_15643);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 11))
{var inst_15638 = (state_15674[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15674,10,Object,null,9);var inst_15647 = chs__$1.call(null,inst_15638);var inst_15648 = done.call(null,inst_15638);var inst_15649 = cljs.core.async.take_BANG_.call(null,inst_15647,inst_15648);var state_15674__$1 = state_15674;var statearr_15689_15714 = state_15674__$1;(statearr_15689_15714[2] = inst_15649);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 12))
{var inst_15660 = (state_15674[12]);var inst_15660__$1 = (state_15674[2]);var inst_15661 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15660__$1);var state_15674__$1 = (function (){var statearr_15690 = state_15674;(statearr_15690[12] = inst_15660__$1);
return statearr_15690;
})();if(cljs.core.truth_(inst_15661))
{var statearr_15691_15715 = state_15674__$1;(statearr_15691_15715[1] = 13);
} else
{var statearr_15692_15716 = state_15674__$1;(statearr_15692_15716[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 13))
{var inst_15663 = cljs.core.async.close_BANG_.call(null,out);var state_15674__$1 = state_15674;var statearr_15693_15717 = state_15674__$1;(statearr_15693_15717[2] = inst_15663);
(statearr_15693_15717[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 14))
{var inst_15660 = (state_15674[12]);var inst_15665 = cljs.core.apply.call(null,f,inst_15660);var state_15674__$1 = state_15674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15674__$1,16,out,inst_15665);
} else
{if((state_val_15675 === 15))
{var inst_15670 = (state_15674[2]);var state_15674__$1 = state_15674;var statearr_15694_15718 = state_15674__$1;(statearr_15694_15718[2] = inst_15670);
(statearr_15694_15718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15675 === 16))
{var inst_15667 = (state_15674[2]);var state_15674__$1 = (function (){var statearr_15695 = state_15674;(statearr_15695[13] = inst_15667);
return statearr_15695;
})();var statearr_15696_15719 = state_15674__$1;(statearr_15696_15719[2] = null);
(statearr_15696_15719[1] = 2);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_15700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15700[0] = state_machine__5532__auto__);
(statearr_15700[1] = 1);
return statearr_15700;
});
var state_machine__5532__auto____1 = (function (state_15674){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_15674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e15701){if((e15701 instanceof Object))
{var ex__5535__auto__ = e15701;var statearr_15702_15720 = state_15674;(statearr_15702_15720[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15721 = state_15674;
state_15674 = G__15721;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_15674){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_15674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_15703 = f__5547__auto__.call(null);(statearr_15703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___15704);
return statearr_15703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5546__auto___15829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_15805){var state_val_15806 = (state_15805[1]);if((state_val_15806 === 1))
{var inst_15776 = cljs.core.vec.call(null,chs);var inst_15777 = inst_15776;var state_15805__$1 = (function (){var statearr_15807 = state_15805;(statearr_15807[7] = inst_15777);
return statearr_15807;
})();var statearr_15808_15830 = state_15805__$1;(statearr_15808_15830[2] = null);
(statearr_15808_15830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15806 === 2))
{var inst_15777 = (state_15805[7]);var inst_15779 = cljs.core.count.call(null,inst_15777);var inst_15780 = (inst_15779 > 0);var state_15805__$1 = state_15805;if(cljs.core.truth_(inst_15780))
{var statearr_15809_15831 = state_15805__$1;(statearr_15809_15831[1] = 4);
} else
{var statearr_15810_15832 = state_15805__$1;(statearr_15810_15832[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15806 === 3))
{var inst_15803 = (state_15805[2]);var state_15805__$1 = state_15805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15805__$1,inst_15803);
} else
{if((state_val_15806 === 4))
{var inst_15777 = (state_15805[7]);var state_15805__$1 = state_15805;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15805__$1,7,inst_15777);
} else
{if((state_val_15806 === 5))
{var inst_15799 = cljs.core.async.close_BANG_.call(null,out);var state_15805__$1 = state_15805;var statearr_15811_15833 = state_15805__$1;(statearr_15811_15833[2] = inst_15799);
(statearr_15811_15833[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15806 === 6))
{var inst_15801 = (state_15805[2]);var state_15805__$1 = state_15805;var statearr_15812_15834 = state_15805__$1;(statearr_15812_15834[2] = inst_15801);
(statearr_15812_15834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15806 === 7))
{var inst_15784 = (state_15805[8]);var inst_15785 = (state_15805[9]);var inst_15784__$1 = (state_15805[2]);var inst_15785__$1 = cljs.core.nth.call(null,inst_15784__$1,0,null);var inst_15786 = cljs.core.nth.call(null,inst_15784__$1,1,null);var inst_15787 = (inst_15785__$1 == null);var state_15805__$1 = (function (){var statearr_15813 = state_15805;(statearr_15813[10] = inst_15786);
(statearr_15813[8] = inst_15784__$1);
(statearr_15813[9] = inst_15785__$1);
return statearr_15813;
})();if(cljs.core.truth_(inst_15787))
{var statearr_15814_15835 = state_15805__$1;(statearr_15814_15835[1] = 8);
} else
{var statearr_15815_15836 = state_15805__$1;(statearr_15815_15836[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15806 === 8))
{var inst_15786 = (state_15805[10]);var inst_15784 = (state_15805[8]);var inst_15785 = (state_15805[9]);var inst_15777 = (state_15805[7]);var inst_15789 = (function (){var c = inst_15786;var v = inst_15785;var vec__15782 = inst_15784;var cs = inst_15777;return ((function (c,v,vec__15782,cs,inst_15786,inst_15784,inst_15785,inst_15777,state_val_15806){
return (function (p1__15722_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15722_SHARP_);
});
;})(c,v,vec__15782,cs,inst_15786,inst_15784,inst_15785,inst_15777,state_val_15806))
})();var inst_15790 = cljs.core.filterv.call(null,inst_15789,inst_15777);var inst_15777__$1 = inst_15790;var state_15805__$1 = (function (){var statearr_15816 = state_15805;(statearr_15816[7] = inst_15777__$1);
return statearr_15816;
})();var statearr_15817_15837 = state_15805__$1;(statearr_15817_15837[2] = null);
(statearr_15817_15837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15806 === 9))
{var inst_15785 = (state_15805[9]);var state_15805__$1 = state_15805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15805__$1,11,out,inst_15785);
} else
{if((state_val_15806 === 10))
{var inst_15797 = (state_15805[2]);var state_15805__$1 = state_15805;var statearr_15819_15838 = state_15805__$1;(statearr_15819_15838[2] = inst_15797);
(statearr_15819_15838[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15806 === 11))
{var inst_15777 = (state_15805[7]);var inst_15794 = (state_15805[2]);var tmp15818 = inst_15777;var inst_15777__$1 = tmp15818;var state_15805__$1 = (function (){var statearr_15820 = state_15805;(statearr_15820[7] = inst_15777__$1);
(statearr_15820[11] = inst_15794);
return statearr_15820;
})();var statearr_15821_15839 = state_15805__$1;(statearr_15821_15839[2] = null);
(statearr_15821_15839[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_15825 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15825[0] = state_machine__5532__auto__);
(statearr_15825[1] = 1);
return statearr_15825;
});
var state_machine__5532__auto____1 = (function (state_15805){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_15805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e15826){if((e15826 instanceof Object))
{var ex__5535__auto__ = e15826;var statearr_15827_15840 = state_15805;(statearr_15827_15840[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15841 = state_15805;
state_15805 = G__15841;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_15805){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_15805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_15828 = f__5547__auto__.call(null);(statearr_15828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___15829);
return statearr_15828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5546__auto___15934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_15911){var state_val_15912 = (state_15911[1]);if((state_val_15912 === 1))
{var inst_15888 = 0;var state_15911__$1 = (function (){var statearr_15913 = state_15911;(statearr_15913[7] = inst_15888);
return statearr_15913;
})();var statearr_15914_15935 = state_15911__$1;(statearr_15914_15935[2] = null);
(statearr_15914_15935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 2))
{var inst_15888 = (state_15911[7]);var inst_15890 = (inst_15888 < n);var state_15911__$1 = state_15911;if(cljs.core.truth_(inst_15890))
{var statearr_15915_15936 = state_15911__$1;(statearr_15915_15936[1] = 4);
} else
{var statearr_15916_15937 = state_15911__$1;(statearr_15916_15937[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 3))
{var inst_15908 = (state_15911[2]);var inst_15909 = cljs.core.async.close_BANG_.call(null,out);var state_15911__$1 = (function (){var statearr_15917 = state_15911;(statearr_15917[8] = inst_15908);
return statearr_15917;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15911__$1,inst_15909);
} else
{if((state_val_15912 === 4))
{var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15911__$1,7,ch);
} else
{if((state_val_15912 === 5))
{var state_15911__$1 = state_15911;var statearr_15918_15938 = state_15911__$1;(statearr_15918_15938[2] = null);
(statearr_15918_15938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 6))
{var inst_15906 = (state_15911[2]);var state_15911__$1 = state_15911;var statearr_15919_15939 = state_15911__$1;(statearr_15919_15939[2] = inst_15906);
(statearr_15919_15939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 7))
{var inst_15893 = (state_15911[9]);var inst_15893__$1 = (state_15911[2]);var inst_15894 = (inst_15893__$1 == null);var inst_15895 = cljs.core.not.call(null,inst_15894);var state_15911__$1 = (function (){var statearr_15920 = state_15911;(statearr_15920[9] = inst_15893__$1);
return statearr_15920;
})();if(inst_15895)
{var statearr_15921_15940 = state_15911__$1;(statearr_15921_15940[1] = 8);
} else
{var statearr_15922_15941 = state_15911__$1;(statearr_15922_15941[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 8))
{var inst_15893 = (state_15911[9]);var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15911__$1,11,out,inst_15893);
} else
{if((state_val_15912 === 9))
{var state_15911__$1 = state_15911;var statearr_15923_15942 = state_15911__$1;(statearr_15923_15942[2] = null);
(statearr_15923_15942[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 10))
{var inst_15903 = (state_15911[2]);var state_15911__$1 = state_15911;var statearr_15924_15943 = state_15911__$1;(statearr_15924_15943[2] = inst_15903);
(statearr_15924_15943[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 11))
{var inst_15888 = (state_15911[7]);var inst_15898 = (state_15911[2]);var inst_15899 = (inst_15888 + 1);var inst_15888__$1 = inst_15899;var state_15911__$1 = (function (){var statearr_15925 = state_15911;(statearr_15925[10] = inst_15898);
(statearr_15925[7] = inst_15888__$1);
return statearr_15925;
})();var statearr_15926_15944 = state_15911__$1;(statearr_15926_15944[2] = null);
(statearr_15926_15944[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_15930 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15930[0] = state_machine__5532__auto__);
(statearr_15930[1] = 1);
return statearr_15930;
});
var state_machine__5532__auto____1 = (function (state_15911){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_15911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e15931){if((e15931 instanceof Object))
{var ex__5535__auto__ = e15931;var statearr_15932_15945 = state_15911;(statearr_15932_15945[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15946 = state_15911;
state_15911 = G__15946;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_15911){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_15911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_15933 = f__5547__auto__.call(null);(statearr_15933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___15934);
return statearr_15933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5546__auto___16043 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_16018){var state_val_16019 = (state_16018[1]);if((state_val_16019 === 1))
{var inst_15995 = null;var state_16018__$1 = (function (){var statearr_16020 = state_16018;(statearr_16020[7] = inst_15995);
return statearr_16020;
})();var statearr_16021_16044 = state_16018__$1;(statearr_16021_16044[2] = null);
(statearr_16021_16044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 2))
{var state_16018__$1 = state_16018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16018__$1,4,ch);
} else
{if((state_val_16019 === 3))
{var inst_16015 = (state_16018[2]);var inst_16016 = cljs.core.async.close_BANG_.call(null,out);var state_16018__$1 = (function (){var statearr_16022 = state_16018;(statearr_16022[8] = inst_16015);
return statearr_16022;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16018__$1,inst_16016);
} else
{if((state_val_16019 === 4))
{var inst_15998 = (state_16018[9]);var inst_15998__$1 = (state_16018[2]);var inst_15999 = (inst_15998__$1 == null);var inst_16000 = cljs.core.not.call(null,inst_15999);var state_16018__$1 = (function (){var statearr_16023 = state_16018;(statearr_16023[9] = inst_15998__$1);
return statearr_16023;
})();if(inst_16000)
{var statearr_16024_16045 = state_16018__$1;(statearr_16024_16045[1] = 5);
} else
{var statearr_16025_16046 = state_16018__$1;(statearr_16025_16046[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 5))
{var inst_15998 = (state_16018[9]);var inst_15995 = (state_16018[7]);var inst_16002 = cljs.core._EQ_.call(null,inst_15998,inst_15995);var state_16018__$1 = state_16018;if(inst_16002)
{var statearr_16026_16047 = state_16018__$1;(statearr_16026_16047[1] = 8);
} else
{var statearr_16027_16048 = state_16018__$1;(statearr_16027_16048[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 6))
{var state_16018__$1 = state_16018;var statearr_16029_16049 = state_16018__$1;(statearr_16029_16049[2] = null);
(statearr_16029_16049[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 7))
{var inst_16013 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16030_16050 = state_16018__$1;(statearr_16030_16050[2] = inst_16013);
(statearr_16030_16050[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 8))
{var inst_15995 = (state_16018[7]);var tmp16028 = inst_15995;var inst_15995__$1 = tmp16028;var state_16018__$1 = (function (){var statearr_16031 = state_16018;(statearr_16031[7] = inst_15995__$1);
return statearr_16031;
})();var statearr_16032_16051 = state_16018__$1;(statearr_16032_16051[2] = null);
(statearr_16032_16051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 9))
{var inst_15998 = (state_16018[9]);var state_16018__$1 = state_16018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16018__$1,11,out,inst_15998);
} else
{if((state_val_16019 === 10))
{var inst_16010 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16033_16052 = state_16018__$1;(statearr_16033_16052[2] = inst_16010);
(statearr_16033_16052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 11))
{var inst_15998 = (state_16018[9]);var inst_16007 = (state_16018[2]);var inst_15995 = inst_15998;var state_16018__$1 = (function (){var statearr_16034 = state_16018;(statearr_16034[10] = inst_16007);
(statearr_16034[7] = inst_15995);
return statearr_16034;
})();var statearr_16035_16053 = state_16018__$1;(statearr_16035_16053[2] = null);
(statearr_16035_16053[1] = 2);
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
var state_machine__5532__auto____0 = (function (){var statearr_16039 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16039[0] = state_machine__5532__auto__);
(statearr_16039[1] = 1);
return statearr_16039;
});
var state_machine__5532__auto____1 = (function (state_16018){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_16018);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e16040){if((e16040 instanceof Object))
{var ex__5535__auto__ = e16040;var statearr_16041_16054 = state_16018;(statearr_16041_16054[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16055 = state_16018;
state_16018 = G__16055;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_16018){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_16018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_16042 = f__5547__auto__.call(null);(statearr_16042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___16043);
return statearr_16042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5546__auto___16190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_16160){var state_val_16161 = (state_16160[1]);if((state_val_16161 === 1))
{var inst_16123 = (new Array(n));var inst_16124 = inst_16123;var inst_16125 = 0;var state_16160__$1 = (function (){var statearr_16162 = state_16160;(statearr_16162[7] = inst_16125);
(statearr_16162[8] = inst_16124);
return statearr_16162;
})();var statearr_16163_16191 = state_16160__$1;(statearr_16163_16191[2] = null);
(statearr_16163_16191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 2))
{var state_16160__$1 = state_16160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16160__$1,4,ch);
} else
{if((state_val_16161 === 3))
{var inst_16158 = (state_16160[2]);var state_16160__$1 = state_16160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16160__$1,inst_16158);
} else
{if((state_val_16161 === 4))
{var inst_16128 = (state_16160[9]);var inst_16128__$1 = (state_16160[2]);var inst_16129 = (inst_16128__$1 == null);var inst_16130 = cljs.core.not.call(null,inst_16129);var state_16160__$1 = (function (){var statearr_16164 = state_16160;(statearr_16164[9] = inst_16128__$1);
return statearr_16164;
})();if(inst_16130)
{var statearr_16165_16192 = state_16160__$1;(statearr_16165_16192[1] = 5);
} else
{var statearr_16166_16193 = state_16160__$1;(statearr_16166_16193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 5))
{var inst_16125 = (state_16160[7]);var inst_16124 = (state_16160[8]);var inst_16133 = (state_16160[10]);var inst_16128 = (state_16160[9]);var inst_16132 = (inst_16124[inst_16125] = inst_16128);var inst_16133__$1 = (inst_16125 + 1);var inst_16134 = (inst_16133__$1 < n);var state_16160__$1 = (function (){var statearr_16167 = state_16160;(statearr_16167[10] = inst_16133__$1);
(statearr_16167[11] = inst_16132);
return statearr_16167;
})();if(cljs.core.truth_(inst_16134))
{var statearr_16168_16194 = state_16160__$1;(statearr_16168_16194[1] = 8);
} else
{var statearr_16169_16195 = state_16160__$1;(statearr_16169_16195[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 6))
{var inst_16125 = (state_16160[7]);var inst_16146 = (inst_16125 > 0);var state_16160__$1 = state_16160;if(cljs.core.truth_(inst_16146))
{var statearr_16171_16196 = state_16160__$1;(statearr_16171_16196[1] = 12);
} else
{var statearr_16172_16197 = state_16160__$1;(statearr_16172_16197[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 7))
{var inst_16156 = (state_16160[2]);var state_16160__$1 = state_16160;var statearr_16173_16198 = state_16160__$1;(statearr_16173_16198[2] = inst_16156);
(statearr_16173_16198[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 8))
{var inst_16124 = (state_16160[8]);var inst_16133 = (state_16160[10]);var tmp16170 = inst_16124;var inst_16124__$1 = tmp16170;var inst_16125 = inst_16133;var state_16160__$1 = (function (){var statearr_16174 = state_16160;(statearr_16174[7] = inst_16125);
(statearr_16174[8] = inst_16124__$1);
return statearr_16174;
})();var statearr_16175_16199 = state_16160__$1;(statearr_16175_16199[2] = null);
(statearr_16175_16199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 9))
{var inst_16124 = (state_16160[8]);var inst_16138 = cljs.core.vec.call(null,inst_16124);var state_16160__$1 = state_16160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16160__$1,11,out,inst_16138);
} else
{if((state_val_16161 === 10))
{var inst_16144 = (state_16160[2]);var state_16160__$1 = state_16160;var statearr_16176_16200 = state_16160__$1;(statearr_16176_16200[2] = inst_16144);
(statearr_16176_16200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 11))
{var inst_16140 = (state_16160[2]);var inst_16141 = (new Array(n));var inst_16124 = inst_16141;var inst_16125 = 0;var state_16160__$1 = (function (){var statearr_16177 = state_16160;(statearr_16177[7] = inst_16125);
(statearr_16177[8] = inst_16124);
(statearr_16177[12] = inst_16140);
return statearr_16177;
})();var statearr_16178_16201 = state_16160__$1;(statearr_16178_16201[2] = null);
(statearr_16178_16201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 12))
{var inst_16124 = (state_16160[8]);var inst_16148 = cljs.core.vec.call(null,inst_16124);var state_16160__$1 = state_16160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16160__$1,15,out,inst_16148);
} else
{if((state_val_16161 === 13))
{var state_16160__$1 = state_16160;var statearr_16179_16202 = state_16160__$1;(statearr_16179_16202[2] = null);
(statearr_16179_16202[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 14))
{var inst_16153 = (state_16160[2]);var inst_16154 = cljs.core.async.close_BANG_.call(null,out);var state_16160__$1 = (function (){var statearr_16180 = state_16160;(statearr_16180[13] = inst_16153);
return statearr_16180;
})();var statearr_16181_16203 = state_16160__$1;(statearr_16181_16203[2] = inst_16154);
(statearr_16181_16203[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 15))
{var inst_16150 = (state_16160[2]);var state_16160__$1 = state_16160;var statearr_16182_16204 = state_16160__$1;(statearr_16182_16204[2] = inst_16150);
(statearr_16182_16204[1] = 14);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_16186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16186[0] = state_machine__5532__auto__);
(statearr_16186[1] = 1);
return statearr_16186;
});
var state_machine__5532__auto____1 = (function (state_16160){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_16160);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e16187){if((e16187 instanceof Object))
{var ex__5535__auto__ = e16187;var statearr_16188_16205 = state_16160;(statearr_16188_16205[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16206 = state_16160;
state_16160 = G__16206;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_16160){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_16160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_16189 = f__5547__auto__.call(null);(statearr_16189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___16190);
return statearr_16189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5546__auto___16349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5547__auto__ = (function (){var switch__5531__auto__ = (function (state_16319){var state_val_16320 = (state_16319[1]);if((state_val_16320 === 1))
{var inst_16278 = [];var inst_16279 = inst_16278;var inst_16280 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16319__$1 = (function (){var statearr_16321 = state_16319;(statearr_16321[7] = inst_16280);
(statearr_16321[8] = inst_16279);
return statearr_16321;
})();var statearr_16322_16350 = state_16319__$1;(statearr_16322_16350[2] = null);
(statearr_16322_16350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 2))
{var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16319__$1,4,ch);
} else
{if((state_val_16320 === 3))
{var inst_16317 = (state_16319[2]);var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16319__$1,inst_16317);
} else
{if((state_val_16320 === 4))
{var inst_16283 = (state_16319[9]);var inst_16283__$1 = (state_16319[2]);var inst_16284 = (inst_16283__$1 == null);var inst_16285 = cljs.core.not.call(null,inst_16284);var state_16319__$1 = (function (){var statearr_16323 = state_16319;(statearr_16323[9] = inst_16283__$1);
return statearr_16323;
})();if(inst_16285)
{var statearr_16324_16351 = state_16319__$1;(statearr_16324_16351[1] = 5);
} else
{var statearr_16325_16352 = state_16319__$1;(statearr_16325_16352[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 5))
{var inst_16280 = (state_16319[7]);var inst_16283 = (state_16319[9]);var inst_16287 = (state_16319[10]);var inst_16287__$1 = f.call(null,inst_16283);var inst_16288 = cljs.core._EQ_.call(null,inst_16287__$1,inst_16280);var inst_16289 = cljs.core.keyword_identical_QMARK_.call(null,inst_16280,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16290 = (inst_16288) || (inst_16289);var state_16319__$1 = (function (){var statearr_16326 = state_16319;(statearr_16326[10] = inst_16287__$1);
return statearr_16326;
})();if(cljs.core.truth_(inst_16290))
{var statearr_16327_16353 = state_16319__$1;(statearr_16327_16353[1] = 8);
} else
{var statearr_16328_16354 = state_16319__$1;(statearr_16328_16354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 6))
{var inst_16279 = (state_16319[8]);var inst_16304 = inst_16279.length;var inst_16305 = (inst_16304 > 0);var state_16319__$1 = state_16319;if(cljs.core.truth_(inst_16305))
{var statearr_16330_16355 = state_16319__$1;(statearr_16330_16355[1] = 12);
} else
{var statearr_16331_16356 = state_16319__$1;(statearr_16331_16356[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 7))
{var inst_16315 = (state_16319[2]);var state_16319__$1 = state_16319;var statearr_16332_16357 = state_16319__$1;(statearr_16332_16357[2] = inst_16315);
(statearr_16332_16357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 8))
{var inst_16279 = (state_16319[8]);var inst_16283 = (state_16319[9]);var inst_16287 = (state_16319[10]);var inst_16292 = inst_16279.push(inst_16283);var tmp16329 = inst_16279;var inst_16279__$1 = tmp16329;var inst_16280 = inst_16287;var state_16319__$1 = (function (){var statearr_16333 = state_16319;(statearr_16333[11] = inst_16292);
(statearr_16333[7] = inst_16280);
(statearr_16333[8] = inst_16279__$1);
return statearr_16333;
})();var statearr_16334_16358 = state_16319__$1;(statearr_16334_16358[2] = null);
(statearr_16334_16358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 9))
{var inst_16279 = (state_16319[8]);var inst_16295 = cljs.core.vec.call(null,inst_16279);var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16319__$1,11,out,inst_16295);
} else
{if((state_val_16320 === 10))
{var inst_16302 = (state_16319[2]);var state_16319__$1 = state_16319;var statearr_16335_16359 = state_16319__$1;(statearr_16335_16359[2] = inst_16302);
(statearr_16335_16359[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 11))
{var inst_16283 = (state_16319[9]);var inst_16287 = (state_16319[10]);var inst_16297 = (state_16319[2]);var inst_16298 = [];var inst_16299 = inst_16298.push(inst_16283);var inst_16279 = inst_16298;var inst_16280 = inst_16287;var state_16319__$1 = (function (){var statearr_16336 = state_16319;(statearr_16336[7] = inst_16280);
(statearr_16336[8] = inst_16279);
(statearr_16336[12] = inst_16299);
(statearr_16336[13] = inst_16297);
return statearr_16336;
})();var statearr_16337_16360 = state_16319__$1;(statearr_16337_16360[2] = null);
(statearr_16337_16360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 12))
{var inst_16279 = (state_16319[8]);var inst_16307 = cljs.core.vec.call(null,inst_16279);var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16319__$1,15,out,inst_16307);
} else
{if((state_val_16320 === 13))
{var state_16319__$1 = state_16319;var statearr_16338_16361 = state_16319__$1;(statearr_16338_16361[2] = null);
(statearr_16338_16361[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 14))
{var inst_16312 = (state_16319[2]);var inst_16313 = cljs.core.async.close_BANG_.call(null,out);var state_16319__$1 = (function (){var statearr_16339 = state_16319;(statearr_16339[14] = inst_16312);
return statearr_16339;
})();var statearr_16340_16362 = state_16319__$1;(statearr_16340_16362[2] = inst_16313);
(statearr_16340_16362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 15))
{var inst_16309 = (state_16319[2]);var state_16319__$1 = state_16319;var statearr_16341_16363 = state_16319__$1;(statearr_16341_16363[2] = inst_16309);
(statearr_16341_16363[1] = 14);
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
});return ((function (switch__5531__auto__){
return (function() {
var state_machine__5532__auto__ = null;
var state_machine__5532__auto____0 = (function (){var statearr_16345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16345[0] = state_machine__5532__auto__);
(statearr_16345[1] = 1);
return statearr_16345;
});
var state_machine__5532__auto____1 = (function (state_16319){while(true){
var ret_value__5533__auto__ = (function (){try{while(true){
var result__5534__auto__ = switch__5531__auto__.call(null,state_16319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5534__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5534__auto__;
}
break;
}
}catch (e16346){if((e16346 instanceof Object))
{var ex__5535__auto__ = e16346;var statearr_16347_16364 = state_16319;(statearr_16347_16364[5] = ex__5535__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5533__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16365 = state_16319;
state_16319 = G__16365;
continue;
}
} else
{return ret_value__5533__auto__;
}
break;
}
});
state_machine__5532__auto__ = function(state_16319){
switch(arguments.length){
case 0:
return state_machine__5532__auto____0.call(this);
case 1:
return state_machine__5532__auto____1.call(this,state_16319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5532__auto____0;
state_machine__5532__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5532__auto____1;
return state_machine__5532__auto__;
})()
;})(switch__5531__auto__))
})();var state__5548__auto__ = (function (){var statearr_16348 = f__5547__auto__.call(null);(statearr_16348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5546__auto___16349);
return statearr_16348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5548__auto__);
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

//# sourceMappingURL=async.js.map