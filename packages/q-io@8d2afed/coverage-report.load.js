montageDefine("8d2afed","coverage-report",{dependencies:["collections/shim","q","./fs"],factory:function(e){e("collections/shim");var t=e("q"),n=e("./fs");n.listTree(".coverage_data",function(e){return/^\.coverage_data\/coveragefile/.test(e)}).then(function(e){return t.all(e.map(function(e){return n.read(e).then(function(e){return JSON.parse(e)}).then(function(e){console.log("<table>"),console.log("    <thead>"),console.log("        <tr>"),console.log("            <th>File</th>"),console.log("            <th>Percentage</th>"),console.log("            <th>Missing</th>"),console.log("        </tr>"),console.log("    </thead>"),console.log("    <tbody>"),Object.forEach(e.files,function(e,t){t=n.relativeFromDirectory(__dirname,t),/^spec/.test(t)||(console.log("        <tr>"),console.log("            <td><code>"+t+"</code></td>"),console.log("            <td>"+(100*e.stats.percentage).toFixed(0)+"%</td>"),console.log("            <td>"+e.stats.missing+"</td>"),console.log("        </tr>"))}),console.log("    </tbody>"),console.log("</table>")},function(t){throw t.message="Can't parse "+e+" because "+t.message,t})}))}).done()}});