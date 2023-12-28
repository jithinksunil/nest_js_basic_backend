import { AuthGuard } from '@nestjs/passport';
import { jwtStrategies } from '../strategy';

export class JwtGuard extends AuthGuard(jwtStrategies.STRATEGY1){}