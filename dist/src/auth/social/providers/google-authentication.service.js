"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const jwt_config_1 = require("../../config/jwt.config");
const users_service_1 = require("../../../users/provider/users.service");
const generate_token_provider_1 = require("../../providers/generate-token.provider");
let GoogleAuthenticationService = class GoogleAuthenticationService {
    jwtConfiguration;
    usersService;
    generateTokenProvider;
    oauthClient;
    constructor(jwtConfiguration, usersService, generateTokenProvider) {
        this.jwtConfiguration = jwtConfiguration;
        this.usersService = usersService;
        this.generateTokenProvider = generateTokenProvider;
    }
    onModuleInit() {
        const clientId = this.jwtConfiguration.googleClientId;
        const clientSecret = this.jwtConfiguration.googleClientSecret;
        this.oauthClient = new google_auth_library_1.OAuth2Client(clientId, clientSecret);
    }
    async authenticate(googleTokenDto) {
        try {
            const loginTicket = await this.oauthClient.verifyIdToken({
                idToken: googleTokenDto.token,
            });
            const payload = loginTicket.getPayload();
            if (!payload) {
                throw new common_1.UnauthorizedException();
            }
            const { sub, email, given_name: firstName, family_name: lastName, } = payload;
            const user = await this.usersService.findOneByGoogleID(sub);
            if (user) {
                return this.generateTokenProvider.generateTokens(user);
            }
            const newUser = await this.usersService.createGoogleUser({
                email: email,
                firstName: firstName,
                lastName: lastName,
                googleId: sub,
            });
            return await this.generateTokenProvider.generateTokens(newUser);
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err);
        }
    }
};
exports.GoogleAuthenticationService = GoogleAuthenticationService;
exports.GoogleAuthenticationService = GoogleAuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [void 0, users_service_1.UsersService,
        generate_token_provider_1.GenerateTokenProvider])
], GoogleAuthenticationService);
//# sourceMappingURL=google-authentication.service.js.map