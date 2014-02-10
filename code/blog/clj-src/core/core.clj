(ns core.core

   (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]

))




(comment  "to start:
 * cljsbuild once to generate the js
 * brepl evaluate both lines and reload browser
 * on the brepl enter this line (js/alert 'here')"

          (def repl-env (reset! cemerick.austin.repls/browser-repl-env
                                (cemerick.austin/repl-env)))

          (cemerick.austin.repls/cljs-repl repl-env)

         )
