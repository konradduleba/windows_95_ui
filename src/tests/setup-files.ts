import "vitest-canvas-mock";
import "@testing-library/jest-dom";
import "dotenv/config";
import "@testing-library/react/dont-cleanup-after-each";

import { enableCleanupAfterTask } from "./utils";
import { getBoundingClientRectMock, HTMLElementOffsets } from "./mocks";

enableCleanupAfterTask();
getBoundingClientRectMock();
HTMLElementOffsets();
