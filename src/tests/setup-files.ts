import "vitest-canvas-mock";
import "@testing-library/jest-dom";
import "dotenv/config";
import "@testing-library/react/dont-cleanup-after-each";

import { getBoundingClientRectMock, HTMLElementOffsets } from "./mocks";

getBoundingClientRectMock();
HTMLElementOffsets();
