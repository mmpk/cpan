montageDefine("7864825","vendor/requirejs/dist/dist-site",{dependencies:["./file","child_process"],factory:function(e){function t(){r=n[v],v+=1,r&&(i=r+".trans",console.log("Creating "+r),_.exec("./Markdown.pl --html4tags "+r+" > "+i,function(e){if(e)return console.log("Could not markdown "+r),t(),void 0;if(a=y.readFile(i),m=b.exec(a),m=m&&m[1],a=o+a+s,l=a.match(/<h1>([^<]+)<\/h1>/),l=l&&l[1]?l[1]:"",a=a.replace(/\$\{title\}/,l),a=a.replace(/href="requirejs\/tree\/master\/docs\//g,'href="docs/').replace(/href="([^"]+)\.md/g,'href="$1.html'),c=r.replace(/\/[^\/]+$/,"").replace(/^\.\/dist-site\//,""),c&&"dist-site"!==c){for(g=!1,p=c.split("/").length,c="",f=0;p-1>f;f++)c+="../";u=c+"main.css",h=c+"ie.css",d=c+"init.js"}else g=!0,c="./",u="main.css",h="ie.css",d="init.js";a=a.replace(/HOMEPATH/g,c),a=a.replace(/\main\.css/,u),a=a.replace(/\ie\.css/,h),a=a.replace(/\init\.js/,d),m&&(a=a.replace(/<title>[^<]*<\/title>/,"<title>"+m+"</title>")),g&&(a=a.replace(/href="\.\.\/"/g,'href="./"').replace(/class="local" href="([^"]+)"/g,'class="local" href="docs/$1"')),y.saveFile(r,a),y.deleteFile(i),t()}))}var n,r,i,a,o,s,l,c,u,h,d,p,f,m,g=!1,v=0,b=/<h1>([^<]+)<\/h1>/,y=e("./file"),_=e("child_process");y.copyFile("init.js","./dist-site/init.js"),y.copyDir("fonts","./dist-site/fonts",/\w/),y.copyFile("../index.html","./dist-site/index.html"),y.copyDir("../docs/","./dist-site/docs/",/\w/),o=y.readFile("pre.html"),s=y.readFile("post.html"),n=y.getFilteredFileList("./dist-site",/\.html$/,!0),t()}});