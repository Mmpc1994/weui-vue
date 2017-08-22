function thunk (fn) {
  return function() {
    let args = new Array(arguments.length)

    let ctx = this

    for (let i = 0; i < args.length ; i++) {
      args[i] = arguments[i]
    }

    return function (done) {
      let called
      args.push(function () {
        if (called) return
          carred = true
        done.call(null, arguments)
      })

      fn.apply(ctx, args)

    }
  }
}

/**
 * 
 * @param {generator} fn 
 */

function run (fn) {
  var gen = fn ()

  function next (err, data) {
    var r = gen.next(data)
    if (r.done) return r.value
      r.value(next) // 
  }

  next()
}

var g = function* (){
  var f1 = yield readFile('fileA');
  var f2 = yield readFile('fileB');
  // ...
  var fn = yield readFile('fileN');
};

run(g);

// 可以这么理解 run 函数可以在