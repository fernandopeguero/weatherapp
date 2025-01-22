export function childAppender(parent, ...childs) {
    childs.forEach((child) => parent.appendChild(child));
}
