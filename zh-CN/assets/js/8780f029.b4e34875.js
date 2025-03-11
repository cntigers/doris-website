"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["356472"],{747528:function(e,s,n){n.r(s),n.d(s,{default:()=>c,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"admin-manual/auth/user-privilege","title":"Authority Management","description":"\x3c!--","source":"@site/docs/admin-manual/auth/user-privilege.md","sourceDirName":"admin-manual/auth","slug":"/admin-manual/auth/user-privilege","permalink":"/zh-CN/docs/dev/admin-manual/auth/user-privilege","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Authority Management","language":"en"}}'),r=n("785893"),t=n("250065");let a={title:"Authority Management",language:"en"},l="Authority Management",o={},d=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Permission framework",id:"permission-framework",level:2},{value:"Supported operations",id:"supported-operations",level:2},{value:"Permission type",id:"permission-type",level:2},{value:"Permission hierarchy",id:"permission-hierarchy",level:2},{value:"ADMIN /GRANT",id:"admin-grant",level:2},{value:"Some explanations",id:"some-explanations",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"More help",id:"more-help",level:2}];function h(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"authority-management",children:"Authority Management"})}),"\n",(0,r.jsx)(s.p,{children:"Doris's new privilege management system refers to MySQL's privilege management mechanism, achieves table-level fine-grained privilege control, role-based privilege access control, and supports whitelist mechanism."}),"\n",(0,r.jsx)(s.h2,{id:"noun-interpretation",children:"Noun Interpretation"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"user_identity"}),"\n",(0,r.jsx)(s.p,{children:"In a permission system, a user is identified as a User Identity. User ID consists of two parts: username and userhost. Username is a user name, which is composed of English uppercase and lowercase. Userhost represents the IP from which the user link comes. User_identity is presented as username@'userhost', representing the username from userhost."}),"\n",(0,r.jsx)(s.p,{children:"Another expression of user_identity is username@['domain'], where domain is the domain name, which can be resolved into a set of IPS by DNS . The final expression is a set of username@'userhost', so we use username@'userhost'to represent it."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Privilege"}),"\n",(0,r.jsx)(s.p,{children:"The objects of permissions are nodes, catalogs, databases or tables. Different permissions represent different operating permissions."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Role"}),"\n",(0,r.jsx)(s.p,{children:"Doris can create custom named roles. Roles can be seen as a set of permissions. When a newly created role can be assigned to a user, the role's permissions are automatically granted. Subsequent changes in the role's permissions will also be reflected in all user permissions that belong to the role."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"user_property"}),"\n",(0,r.jsx)(s.p,{children:"User attributes are directly attached to a user, not to a user identity. That is, both cmy@'192.%'and cmy@['domain'] have the same set of user attributes, which belong to user cmy, not cmy@'192.%' or cmy@['domain']."}),"\n",(0,r.jsx)(s.p,{children:"User attributes include, but are not limited to, the maximum number of user connections, import cluster configuration, and so on."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"permission-framework",children:"Permission framework"}),"\n",(0,r.jsx)(s.p,{children:"Doris permission design is based on RBAC (Role-Based Access Control) permission management model. Users are associated with roles, roles and permissions, and users are associated with permissions indirectly through roles."}),"\n",(0,r.jsx)(s.p,{children:"When a role is deleted, the user automatically loses all permissions of the role."}),"\n",(0,r.jsx)(s.p,{children:"When a user and a role are disassociated, the user automatically loses all permissions of the role."}),"\n",(0,r.jsx)(s.p,{children:"When the role's permissions are added or deleted, the user's permissions will also change."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  user1 \u251C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u25BA  role1 \u251C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u25BA  priv1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n              \u2502                 \u2502\n              \u2502                 \u2502\n              \u2502   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502\n              \u2502   \u2502  role2 \u251C\u2500\u2500\u2500\u2500\u2524\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  user2 \u251C\u2500\u2500\u2500\u2500\u2518                 \u2502  \u250C\u2500\u25BA  priv2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                      \u2502  \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502  \u2502\n           \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u25BA  role3 \u251C\u2500\u2500\u2500\u2500\u2518  \u2502\n           \u2502      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2502\n           \u2502                       \u2502\n           \u2502                       \u2502\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u2502 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  userN \u251C\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u25BA  roleN \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u25BA  privN \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(s.p,{children:"As shown in the figure above:"}),"\n",(0,r.jsx)(s.p,{children:"Both user1 and user2 have priv1 permissions through role1."}),"\n",(0,r.jsx)(s.p,{children:"UserN has priv1 permissions through role3, priv2 and privN permissions through roleN, so userN has priv1, priv2 and privN permissions at the same time."}),"\n",(0,r.jsx)(s.p,{children:"In order to facilitate user operation, users can be authorized directly. In the underlying implementation, a default role dedicated to the user is created for each user. When authorizing a user, it is actually authorizing the user's default role."}),"\n",(0,r.jsx)(s.p,{children:"The default role cannot be deleted or assigned to others. When a user is deleted, the default role will also be deleted automatically."}),"\n",(0,r.jsx)(s.h2,{id:"supported-operations",children:"Supported operations"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Create users: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/CREATE-USER",children:"CREATE USER"})]}),"\n",(0,r.jsxs)(s.li,{children:["Alter users: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/ALTER-USER",children:"ALTER USER"})]}),"\n",(0,r.jsxs)(s.li,{children:["Delete users: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/DROP-USER",children:"DROP USER"})]}),"\n",(0,r.jsxs)(s.li,{children:["Authorization/Assign roles: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/GRANT-TO",children:"GRANT"})]}),"\n",(0,r.jsxs)(s.li,{children:["Withdrawal/REVOKE roles: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/REVOKE-FROM",children:"REVOKE"})]}),"\n",(0,r.jsxs)(s.li,{children:["Create role: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/CREATE-ROLE",children:"CREATE ROLE"})]}),"\n",(0,r.jsxs)(s.li,{children:["Delete roles: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/DROP-ROLE",children:"DROP ROLE"})]}),"\n",(0,r.jsxs)(s.li,{children:["View current user privileges: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/SHOW-GRANTS",children:"SHOW GRANTS"})]}),"\n",(0,r.jsxs)(s.li,{children:["View all user privileges: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/SHOW-GRANTS",children:"SHOW ALL GRANTS"})]}),"\n",(0,r.jsxs)(s.li,{children:["View the created roles: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/SHOW-ROLES",children:"SHOW ROLES"})]}),"\n",(0,r.jsxs)(s.li,{children:["Set user properties: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/SET-PROPERTY",children:"SET PROPERTY"})]}),"\n",(0,r.jsxs)(s.li,{children:["View user properties: ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/SHOW-PROPERTY",children:"SHOW PROPERTY"})]}),"\n",(0,r.jsxs)(s.li,{children:["Change password :",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/SET-PASSWORD",children:"SET PASSWORD"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For detailed help with the above commands, you can use help + command to get help after connecting Doris through the MySQL client. For example ",(0,r.jsx)(s.code,{children:"HELP CREATE USER"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"permission-type",children:"Permission type"}),"\n",(0,r.jsx)(s.p,{children:"Doris currently supports the following permissions"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Node_priv"}),"\n",(0,r.jsx)(s.p,{children:"Nodes change permissions. Including FE, BE, BROKER node addition, deletion, offline operations. User who has Node_priv and Grant_priv permission, can grant Node_priv to other users."}),"\n",(0,r.jsx)(s.p,{children:"The root user has this permission by default."}),"\n",(0,r.jsx)(s.p,{children:"Users who have both Grant_priv and Node_priv can grant this privilege to other users."}),"\n",(0,r.jsx)(s.p,{children:"This permission can only be granted to the Global level."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Grant_priv"}),"\n",(0,r.jsx)(s.p,{children:"Permissions change permissions. Allow the execution of operations including authorization, revocation, add/delete/change user/role, etc."}),"\n",(0,r.jsx)(s.p,{children:"However, a user with this permission can not grant node_priv permission to other users, unless the user itself has node_priv permission."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Select_priv"}),"\n",(0,r.jsx)(s.p,{children:"Read-only access to databases and tables."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Load_priv"}),"\n",(0,r.jsx)(s.p,{children:"Write permissions to databases and tables. Including Load, Insert, Delete and so on."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Alter_priv"}),"\n",(0,r.jsx)(s.p,{children:"Change permissions on databases and tables. It includes renaming libraries/tables, adding/deleting/changing columns, and adding/deleting partitions."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Create_priv"}),"\n",(0,r.jsx)(s.p,{children:"The right to create databases, tables, and views."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Drop_priv"}),"\n",(0,r.jsx)(s.p,{children:"Delete permissions for databases, tables, and views."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Usage_priv"}),"\n",(0,r.jsx)(s.p,{children:"Use of resources and workload groups."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"permission-hierarchy",children:"Permission hierarchy"}),"\n",(0,r.jsx)(s.p,{children:"At the same time, according to the scope of application of permissions, we divide them into four levels:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["GLOBAL LEVEL: Global permissions. That is, permissions on ",(0,r.jsx)(s.code,{children:"*.*.*"})," granted by GRANT statements. The granted permissions apply to any table in any database."]}),"\n",(0,r.jsxs)(s.li,{children:["CATALOG LEVEL: Catalog level permissions. That is, the permissions on ",(0,r.jsx)(s.code,{children:"ctl.*.*"})," granted through the GRANT statement. The permissions granted apply to any library table in the specified Catalog."]}),"\n",(0,r.jsxs)(s.li,{children:["DATABASE LEVEL: Database-level permissions. That is, the permissions on ",(0,r.jsx)(s.code,{children:"ctl.db.*"})," granted through the GRANT statement. The privileges granted apply to any table in the specified database."]}),"\n",(0,r.jsxs)(s.li,{children:["TABLE LEVEL: Table-level permissions. That is, the permissions on ",(0,r.jsx)(s.code,{children:"ctl.db.tbl"})," granted through the GRANT statement. The privileges granted apply to the specified table in the specified database."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The privileges of the resources are divided into two levels as follows:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["GLOBAL LEVEL: Global privileges. That is, the privileges granted on ",(0,r.jsx)(s.code,{children:"*"})," by the GRANT statement. The privileges granted apply to the resource."]}),"\n",(0,r.jsxs)(s.li,{children:["RESOURCE LEVEL: Resource-level privileges. This is the permission on ",(0,r.jsx)(s.code,{children:"resource_name"})," granted by the GRANT statement. The privilege granted applies to the specified resource."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The workload group has only one level:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["WORKLOAD GROUP LEVEL: privileges on ",(0,r.jsx)(s.code,{children:"workload_group_name"})," that can be granted with the GRANT statement. The privileges granted apply to the specified workload group. workload_group_name supports ",(0,r.jsx)(s.code,{children:"%"})," and ",(0,r.jsx)(s.code,{children:"_"})," match characters, ",(0,r.jsx)(s.code,{children:"%"})," can match any string and ",(0,r.jsx)(s.code,{children:"_"})," matches any single character."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"admin-grant",children:"ADMIN /GRANT"}),"\n",(0,r.jsxs)(s.p,{children:["ADMIN_PRIV and GRANT_PRIV have the authority of ",(0,r.jsx)(s.strong,{children:'"grant authority"'})," at the same time, which is more special. The operations related to these two privileges are described here individually."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"CREATE USER"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Users with ADMIN privileges, or GRANT privileges at the GLOBAL and DATABASE levels can create new users."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"DROP USER"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Users with ADMIN authority or GRANT authority at the global level can drop users."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"CREATE/DROP ROLE"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Users with ADMIN authority or GRANT authority at the global level can create or drop role."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"GRANT /REVOKE"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Users with ADMIN or GLOBAL GRANT privileges can grant or revoke the privileges of any user."}),"\n",(0,r.jsx)(s.li,{children:"Users with GRANT privileges at the DATABASE level can grant or revoke the privileges of any user on the specified database."}),"\n",(0,r.jsx)(s.li,{children:"Users with GRANT privileges at TABLE level can grant or revoke the privileges of any user on the specified tables in the specified database."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"SET PASSWORD"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Users with ADMIN or GLOBAL GRANT privileges can set any user's password."}),"\n",(0,r.jsxs)(s.li,{children:["Ordinary users can set their corresponding User Identity password. The corresponding User Identity can be viewed by ",(0,r.jsx)(s.code,{children:"SELECT CURRENT_USER();"}),"command."]}),"\n",(0,r.jsx)(s.li,{children:"Users with GRANT privileges at non-GLOBAL level cannot set the password of existing users, but can only specify the password when creating users."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"some-explanations",children:"Some explanations"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"When Doris initializes, the following users and roles are automatically created:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Operator role: This role has Node_priv and Admin_priv, i.e. all permissions for Doris. In a subsequent upgrade version, we may restrict the role's permissions to Node_priv, which is to grant only node change permissions. To meet some cloud deployment requirements."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"admin role: This role has Admin_priv, which is all permissions except for node changes."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"root@'%': root user, which allows login from any node, with the role of operator."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"admin@'%': admin user, allowing login from any node, role admin."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"It is not supported to delete or change the permissions of default created roles or users."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The user of the operator role has one and only one user, that is, root. Users of admin roles can create multiple."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Operational instructions for possible conflicts"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Conflict between domain name and ip:"}),"\n",(0,r.jsx)(s.p,{children:"Assume that the following users are created:"}),"\n",(0,r.jsx)(s.p,{children:"CREATE USER cmy@['domain'];"}),"\n",(0,r.jsx)(s.p,{children:"And authorize:"}),"\n",(0,r.jsx)(s.p,{children:"GRANT SELECT_PRIV ON *.* TO cmy@['domain']"}),"\n",(0,r.jsx)(s.p,{children:"The domain is resolved into two ips: IP1 and IP2"}),"\n",(0,r.jsx)(s.p,{children:"Let's assume that we have a separate authorization for cmy@'ip1':"}),"\n",(0,r.jsx)(s.p,{children:"GRANT ALTER_PRIV ON *.* TO cmy@'ip1';"}),"\n",(0,r.jsx)(s.p,{children:"The permissions of CMY @'ip1'will be changed to SELECT_PRIV, ALTER_PRIV. And when we change the permissions of cmy@['domain'] again, cmy@'ip1' will not follow."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"duplicate IP conflicts:"}),"\n",(0,r.jsx)(s.p,{children:"Assume that the following users are created:"}),"\n",(0,r.jsx)(s.p,{children:"CREATE USER cmy@'%' IDENTIFIED BY \"12345\";"}),"\n",(0,r.jsx)(s.p,{children:"CREATE USER cmy@'192.%' IDENTIFIED BY \"abcde\";"}),"\n",(0,r.jsx)(s.p,{children:"In priority,'192.%'takes precedence over'%', so when user CMY tries to login Doris with password '12345' from 192.168.1.1, the machine will be rejected."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Forget passwords"}),"\n",(0,r.jsxs)(s.p,{children:["If you forget your password and cannot log in to Doris, you can add ",(0,r.jsx)(s.code,{children:"skip_localhost_auth_check"})," in fe config and restart FE so that login to Doris without a password in localhost."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"skip_localhost_auth_check = true"})}),"\n",(0,r.jsx)(s.p,{children:"After login, the password can be reset through the SET PASSWORD command."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"No user can reset the password of the root user except the root user himself."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"ADMIN_PRIV permissions can only be granted or revoked at the GLOBAL level."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Having GRANT_PRIV at GLOBAL level is actually equivalent to having ADMIN_PRIV, because GRANT_PRIV at this level has the right to grant arbitrary permissions, please use it carefully."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"current_user()"})," and ",(0,r.jsx)(s.code,{children:"user()"})]}),"\n",(0,r.jsxs)(s.p,{children:["Users can view ",(0,r.jsx)(s.code,{children:"current_user"})," and ",(0,r.jsx)(s.code,{children:"user"})," respectively by ",(0,r.jsx)(s.code,{children:"SELECT current_user();"})," and ",(0,r.jsx)(s.code,{children:"SELECT user();"}),". Where ",(0,r.jsx)(s.code,{children:"current_user"})," indicates which identity the current user is passing through the authentication system, and ",(0,r.jsx)(s.code,{children:"user"})," is the user's current actual ",(0,r.jsx)(s.code,{children:"user_identity"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["For example, suppose the user ",(0,r.jsx)(s.code,{children:"user1@'192.%'"})," is created, and then a user user1 from 192.168.10.1 is logged into the system. At this time, ",(0,r.jsx)(s.code,{children:"current_user"})," is ",(0,r.jsx)(s.code,{children:"user1@'192.%'"}),", and ",(0,r.jsx)(s.code,{children:"user"})," is ",(0,r.jsx)(s.code,{children:"user1@'192.168.10.1'"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["All privileges are given to a ",(0,r.jsx)(s.code,{children:"current_user"}),", and the real user has all the privileges of the corresponding ",(0,r.jsx)(s.code,{children:"current_user"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:" `SELECT session_user()`  is supported , which is having same behavior as user() function.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Password Validation"}),"\n",(0,r.jsxs)(s.p,{children:["In version 1.2, the verification function of user password strength has been added. This feature is controlled by the global variable ",(0,r.jsx)(s.code,{children:"validate_password_policy"}),". Defaults to ",(0,r.jsx)(s.code,{children:"NONE/0"}),", i.e. password strength is not checked. If set to ",(0,r.jsx)(s.code,{children:"STRONG/2"}),', the password must contain 3 items of "uppercase letters", "lowercase letters", "numbers" and "special characters", and the length must be greater than or equal to 8.']}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(s.p,{children:"Here are some usage scenarios of Doris privilege system."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Scene 1"}),"\n",(0,r.jsx)(s.p,{children:"The users of Doris cluster are divided into Admin, RD and Client. Administrators have all the rights of the whole cluster, mainly responsible for cluster building, node management and so on. The development engineer is responsible for business modeling, including database building, data import and modification. Users access different databases and tables to get data."}),"\n",(0,r.jsx)(s.p,{children:"In this scenario, ADMIN or GRANT privileges can be granted to administrators. Give RD CREATE, DROP, ALTER, LOAD, SELECT permissions to any or specified database tables. Give Client SELECT permission to any or specified database table. At the same time, it can also simplify the authorization of multiple users by creating different roles."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Scene 2"}),"\n",(0,r.jsx)(s.p,{children:"There are multiple services in a cluster, and each business may use one or more data. Each business needs to manage its own users. In this scenario. Administrator users can create a user with GRANT privileges at the DATABASE level for each database. The user can only authorize the specified database for the user."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Blacklist"}),"\n",(0,r.jsxs)(s.p,{children:["Doris itself does not support blacklist, only whitelist, but we can simulate blacklist in some way. Suppose you first create a user named ",(0,r.jsx)(s.code,{children:"user@'192.%'"}),", which allows users from ",(0,r.jsx)(s.code,{children:"192.*"})," to login. At this time, if you want to prohibit users from ",(0,r.jsx)(s.code,{children:"192.168.10.1"})," from logging in, you can create another user with ",(0,r.jsx)(s.code,{children:"user@'192.168.10.1'"})," and set a new password. Since ",(0,r.jsx)(s.code,{children:"192.168.10.1"})," has a higher priority than ",(0,r.jsx)(s.code,{children:"192.%"}),", user can no longer login by using the old password from ",(0,r.jsx)(s.code,{children:"192.168.10.1"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"more-help",children:"More help"}),"\n",(0,r.jsxs)(s.p,{children:["For more detailed syntax and best practices for permission management use, please refer to the ",(0,r.jsx)(s.a,{href:"../../sql-manual/sql-statements/account-management/GRANT-TO",children:"GRANTS"})," command manual. Enter ",(0,r.jsx)(s.code,{children:"HELP GRANTS"})," at the command line of the MySql client for more help information."]})]})}function c(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return a}});var i=n(667294);let r={},t=i.createContext(r);function a(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);