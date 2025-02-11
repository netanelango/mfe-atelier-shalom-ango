
    export type RemoteKeys = 'container/button' | 'container/header';
    type PackageType<T> = T extends 'container/header' ? typeof import('container/header') :T extends 'container/button' ? typeof import('container/button') :any;