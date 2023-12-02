# Goals

- Planning to separate the Microservices from cares-web-frontend to cares-web-backend

# Issues

- dev dependency of workspaces are included in the monorepo's root node_modules, when updating dev dependency of a workspace it still targets the monorepo's root node_modules dev dependency outdated
