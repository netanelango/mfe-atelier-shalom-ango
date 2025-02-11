
    export type RemoteKeys = 'myprovider/button' | 'myprovider/header';
    type PackageType<T> = T extends 'myprovider/header' ? typeof import('myprovider/header') :T extends 'myprovider/button' ? typeof import('myprovider/button') :any;