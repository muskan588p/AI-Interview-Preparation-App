import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.id).select("-password");
      if (user) {
        return done(null, user);
      } 
      else {
        return done(null, false);
      }
    } 
    catch (error) {
      return done(error, false);
    }
  })
);

export default passport;