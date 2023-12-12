# Goals

- Planning to separate the Microservices from cares-web-frontend to cares-web-backend

# Issues

- Contexts inside complaints are not unmounted when logging out and logging in another `role` account -> Need to move the Complaint Contexts higher
- dev dependency of workspaces are included in the monorepo's root node_modules, when updating dev dependency of a workspace it still targets the monorepo's root node_modules dev dependency outdated
