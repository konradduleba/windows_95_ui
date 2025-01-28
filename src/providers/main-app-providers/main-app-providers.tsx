import { FC, PropsWithChildren } from "react";

import { MainWrapper } from "@layouts/main-wrapper/main-wrapper";

import { DisplayPropertiesProvider } from "@providers/display-properties-provider/display-properties.provider";
import { QueryProvider } from "@providers/query-provider/query-provider.provider";
import { ScreenPropertiesProvider } from "@providers/screen-properties-provider/screen-properties.provider";
import { StartAppProvider } from "@providers/start-app-provider/start-app.provider";
import { TaskManagerProvider } from "@providers/task-manager-provider/task-manager.provider";
import { LangProvider } from "@providers/lang-provider/lang.provider";
import { BoostrapProvider } from "@providers/bootstrap-provider/bootstrap.provider";
import { AuthProvider } from "@providers/auth-provider/auth.provider";
import { UserSessionProvider } from "@providers/user-session-provider/user-session.provider";

import { ActiveTasks } from "@layouts/active-tasks/active-tasks";
import { Desktop } from "@layouts/desktop/desktop";

import "@styles/import-styles";

export const MainAppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryProvider>
      <ScreenPropertiesProvider>
        <LangProvider>
          <MainWrapper>
            <DisplayPropertiesProvider>
              <UserSessionProvider>
                <TaskManagerProvider>
                  <AuthProvider>
                    <BoostrapProvider>
                      <StartAppProvider>
                        <ActiveTasks />
                        {children}
                        <Desktop />
                      </StartAppProvider>
                    </BoostrapProvider>
                  </AuthProvider>
                </TaskManagerProvider>
              </UserSessionProvider>
            </DisplayPropertiesProvider>
          </MainWrapper>
        </LangProvider>
      </ScreenPropertiesProvider>
    </QueryProvider>
  );
};
