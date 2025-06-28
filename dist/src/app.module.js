"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const tags_controller_1 = require("./tags/tags.controller");
const tags_module_1 = require("./tags/tags.module");
const meta_options_module_1 = require("./meta-options/meta-options.module");
const config_1 = require("@nestjs/config");
const pagination_module_1 = require("./common/pagination/pagination.module");
const app_config_1 = require("./config/app.config");
const db_config_1 = require("./config/db.config");
const environment_validation_1 = require("./config/environment.validation");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("./auth/config/jwt.config");
const authentication_guard_1 = require("./auth/guards/authentication/authentication.guard");
const access_token_guard_1 = require("./auth/guards/accessToken/access-token.guard");
const data_response_interceptor_1 = require("./common/interceptors/data-response/data-response.interceptor");
const uploads_module_1 = require("./uploads/uploads.module");
const mail_module_1 = require("./mail/mail.module");
const ENV = process.env.NODE_ENV;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: !ENV ? '.env' : `.env.${ENV}`,
                load: [app_config_1.default, db_config_1.default],
                validationSchema: environment_validation_1.default,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('database.host'),
                    port: configService.get('database.port'),
                    username: configService.get('database.user'),
                    password: configService.get('database.password'),
                    database: configService.get('database.name'),
                    autoLoadEntities: configService.get('database.autoLoadEntities'),
                    synchronize: configService.get('database.synchronize'),
                }),
            }),
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            auth_module_1.AuthModule,
            tags_module_1.TagsModule,
            meta_options_module_1.MetaOptionsModule,
            pagination_module_1.PaginationModule,
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
            uploads_module_1.UploadsModule,
            mail_module_1.MailModule,
        ],
        controllers: [app_controller_1.AppController, tags_controller_1.TagsController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: authentication_guard_1.AuthenticationGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: data_response_interceptor_1.DataResponseInterceptor,
            },
            access_token_guard_1.AccessTokenGuard,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map