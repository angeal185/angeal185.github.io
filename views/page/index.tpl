<div id="dash" class="page-content">
<style>

#console {
    background-color: #000000;
    color: #57ff57;
    display: block;
    float: left;
    outline: none;
    margin-top: 50px;
    width: 100vw;
    height: 100vh;
	text-align:left;
	font-size:16px;
    animation: font-refresh-flicker 10ms infinite;
	
}

@keyframes font-refresh-flicker {
  0% {
    color: #57ff57;
  }
  50% {
    color: #57aa57;
  }
  100% {
    color: #57ff57;
  }
}
@keyframes cursor-refresh-flicker {
  0% {
    background-color: #57ff57;
  }
  50% {
    background-color: #57aa57;
  }
  100% {
    background-color: #57ff57;
  }
}
@keyframes cursor-blink {
  50% {
    background-color: #57ff57;
  }
}

@keyframes type{ 
  from { width: 0; } 
} 

@keyframes type2{
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; } 
} 

@keyframes blink{
  to{opacity: .0;}
}
</style>

<div id="console" contenteditable="true">
  <h1>Ben Eaves</h1><h2>Full-Stack web developer</h2><br>welcome to my world...<br><br>Type "info" for instructions.<br><br>Type "help" to see a full list of commands.<br>&nbsp;<br>>&nbsp;</div>
</div>



