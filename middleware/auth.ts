import { Request, Response } from "express";
import { auth } from 'express-oauth2-jwt-bearer';

export const jwtCheck = auth({
    audience: 'online-course-platform-api',
    issuerBaseURL: 'https://dev-nfuqcad6eajqugnt.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });



