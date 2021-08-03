import { LbAssignment4Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: LbAssignment4Application;
    client: Client;
}
