异步 async -> 不等待执行的结果
同步 sync -> 一次只执行一个逻辑，等待执行的结果

回调

console.log(1);
setTimeout(()=>console.log(2),1000);
console.log(3);

js single threaded
一次只能一件事情

thread, process
线程，进程

blocking
阻塞
non-blocking
非阻塞

I/O input/output
数据请求，文件请求

heap, stack

call stack 调用栈

stack, queue
stack -> FILO
queue -> FIFO

执行同步代码（一行一行，从上到下）
碰到异步的情况（事件监听，ajax 请求），webapis 进行登记。当事件完成，或者触发后，该事件（callback function）进入 callback queue
当 call stack 为空
尝试做 dom 渲染
event loop 开始轮询
从 queue 里取第一个事件放入 stack 执行

console.log(1);
setTimeout(()=>console.log(2),0);
console.log(3);

repl
read evaluate print loop
