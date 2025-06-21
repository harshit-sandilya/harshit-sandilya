import { NodeJS_ErrnoException } from "@/types/NodeJS_ErrnoException";

export function isNodeJSErrnoException(
  error: unknown,
): error is NodeJS_ErrnoException {
  return (
    error instanceof Error &&
    typeof (error as NodeJS_ErrnoException).code === "string"
  );
}
