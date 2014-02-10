(defproject blog "0.1.0-SNAPSHOT"
  :description "Code for swannodette.github.io"
  :url "http://swannodette.github.io"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :repositories {"sonatype-staging"
                 "https://oss.sonatype.org/content/groups/staging/"}

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/core.match "0.2.1"]
]

  :source-paths ["src" "src-clj"]
  :plugins [[com.cemerick/austin "0.1.3"]
            [lein-cljsbuild "1.0.1"]]
  :repl-options { :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild
  {:builds
   [{:id "csp-dev"
     :source-paths ["src/blog/csp"
                    "src/blog/utils"]
     :compiler {:output-to "../../assets/js/csp.js"
                :output-dir "../../assets/out-csp"
                :optimizations :none
                :source-map true}}
    {:id "csp-adv"
     :source-paths ["src/blog/csp"
                    "src/blog/utils"]
     :compiler {:optimizations :advanced
                :pretty-print false
                :output-to "../../assets/js/csp.js"
                :output-wrapper true}}

    {:id "proc-dev"
     :source-paths ["src/blog/processes"
                    "src/blog/utils"]
     :compiler {:optimizations :whitespace
                :pretty-print false
                :output-to "../../assets/js/proc.js"}}
    {:id "proc-adv"
     :source-paths ["src/blog/processes"
                    "src/blog/utils"]
     :compiler {:optimizations :advanced
                :pretty-print false
                :output-to "../../assets/js/proc.js"
                :output-wrapper true}}

    {:id "resp-dev"
     :source-paths ["src/blog/responsive"
                    "src/blog/utils"]
     :compiler {:output-to "../../assets/js/resp.js"
                :output-dir "../../assets/out-resp"
                :optimizations :none
                :source-map true}}
    {:id "resp-adv"
     :source-paths ["src/blog/responsive"
                    "src/blog/utils"]
     :compiler {:optimizations :advanced
                :pretty-print false
                :output-to "../../assets/js/resp.js"
                :output-wrapper true}}

    {:id "ac-dev"
     :source-paths ["src/blog/autocomplete"
                    "src/blog/utils"]
     :compiler {:output-dir "../../assets/out-ac"
                :optimizations :none
                :source-map true
                :output-to "../../assets/js/ac.js"}}
    {:id "ac-adv"
     :source-paths ["src/blog/autocomplete"
                    "src/blog/utils"]
     :compiler {:optimizations :advanced
                :pretty-print false
                :output-to "../../assets/js/ac.js"
                :output-wrapper true}}

    {:id "promises-simp"
     :source-paths ["src/blog/promises"
                    "src/blog/utils"]
     :compiler {:optimizations :simple
                :static-fns true
                :pretty-print false
                :output-to "../../assets/js/promises.js"}}
    {:id "promises-adv"
     :source-paths ["src/blog/promises"
                    "src/blog/utils"]
     :compiler {:optimizations :advanced
                :pretty-print false
                :output-to "../../assets/js/promises.js"
                :output-wrapper true}}

    {:id "errors-simp"
     :source-paths ["src/blog/errors"
                    "src/blog/utils"]
     :compiler {:optimizations :simple
                :static-fns true
                :pretty-print false
                :output-to "../../assets/js/errors.js"}}]})
