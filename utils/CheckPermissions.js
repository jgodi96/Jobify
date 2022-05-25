import { UnAuthenticatedError } from "../errors/index.js";
const CheckPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAuthenticatedError("Not authorized to access this router");
};

export default CheckPermissions;
