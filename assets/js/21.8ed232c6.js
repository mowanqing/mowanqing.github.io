(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{425:function(v,_,l){"use strict";l.r(_);var i=l(21),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"文件特殊权限"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文件特殊权限"}},[v._v("#")]),v._v(" 文件特殊权限")]),v._v(" "),l("p",[v._v("SetUID")]),v._v(" "),l("ul",[l("li",[v._v("只有可以执行的二进制程序才能设定SUID权限")]),v._v(" "),l("li",[v._v("命令执行者要对该程序拥有x执行权限")]),v._v(" "),l("li",[v._v("命令执行者在执行该程序时获得该程序文件所有者的身份\n"),l("ul",[l("li",[v._v("变身成为该文件的所有者(比如原来是root所有者,现在获得了root身份)")])])]),v._v(" "),l("li",[v._v("SetUID权限只在该程序执行过程中有效,也就是说身份改变只在程序执行过程中有效\n"),l("ul",[l("li",[v._v("比如passwd命令,rws权限")])])]),v._v(" "),l("li",[v._v("设定SetUID的方法\n"),l("ul",[l("li",[v._v("4代表SUID\n"),l("ul",[l("li",[v._v("chmod 4755 文件名")]),v._v(" "),l("li",[v._v("chmod u+s 文件名")]),v._v(" "),l("li",[v._v("755或者u-s 文件名即可去掉s权限")])])])])]),v._v(" "),l("li",[v._v("危险的SetUID\n"),l("ul",[l("li",[v._v('关键目录应严格控制写权限,比如"/","usr"等')]),v._v(" "),l("li",[v._v("用户的密码设置要严格遵守密码三原则")]),v._v(" "),l("li",[v._v("对系统中默认应该具有SetUID权限的文件作一列表,定时检查有没有这之外的文件被设置了SetUID权限")])])])]),v._v(" "),l("p",[v._v("SetGID")]),v._v(" "),l("p",[v._v("(针对文件的作用)")]),v._v(" "),l("ul",[l("li",[v._v("只有可执行的二进制程序才能设置SGID权限")]),v._v(" "),l("li",[v._v("命令执行者要对该程序拥有x(执行)权限")]),v._v(" "),l("li",[v._v("命令执行在执行程序的时候,组身份升级为该程序文件的属组")]),v._v(" "),l("li",[v._v("SetGID权限同样只在该程序执行过程中有效,也就是说组身份改变只在程序执行过程中有效\n"),l("ul",[l("li",[v._v("比如locate")])])])]),v._v(" "),l("p",[v._v("(针对目录的作用)")]),v._v(" "),l("ul",[l("li",[v._v("普通用户必须对此目录拥有r和x权限,才能进入此目录")]),v._v(" "),l("li",[v._v("普通用户在此目录中的有效组会变成此目录的所属组")]),v._v(" "),l("li",[v._v("若普通用户对此目录拥有w权限时,新建的文件的默认所属组是这个目录的所属组")]),v._v(" "),l("li",[v._v("设定SetGID的方法\n"),l("ul",[l("li",[v._v("2代表SGID\n"),l("ul",[l("li",[v._v("chmod 2755 文件/目录名")]),v._v(" "),l("li",[v._v("chmod g+s 文件/目录名")]),v._v(" "),l("li",[v._v("755或者g-s 文件/目录名即可去掉s权限")])])])])])]),v._v(" "),l("p",[v._v("Sticky BIT")]),v._v(" "),l("ul",[l("li",[v._v("粘着位目前只对目录有效")]),v._v(" "),l("li",[v._v("普通用户对该目录拥有w和x权限,即普通用户可以在此目录拥有写入权限")]),v._v(" "),l("li",[v._v("如果没有粘着位,因为普通用户拥有w权限,所以可以删除此目录下所有文件,包括其他用户建立的文件.一旦被赋予了粘着位,除了root可以删除所有文件,普通用户就算拥有w权限,也只能删除自己建立的文件,但是不能删除其他用户建立的文件.")]),v._v(" "),l("li",[v._v("1代表SBID\n"),l("ul",[l("li",[v._v("chmod 1755 目录名")]),v._v(" "),l("li",[v._v("chmod o+t  目录名")]),v._v(" "),l("li",[v._v("755或者 0-t")])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);