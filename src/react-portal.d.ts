// src/react-portal.d.ts
declare module 'react-portal' {
  import * as React from 'react';

  interface PortalProps {
    children: React.ReactNode;
    portalId?: string;
  }

  export class Portal extends React.Component<PortalProps> {}
}
